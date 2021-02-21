
import { GetStaticProps } from 'next'
import { Button, Table, FormControl } from 'react-bootstrap'
import styles from '../styles/Musics.module.css'
import { useEffect, useState } from 'react'

export default function Musics({ musics }) {

	const [name, setName] = useState('')
	const [band, setBand] = useState('')
	const [musicList, setMusicList] = useState(musics)

	const addMusic = async () => {
		const res = await fetch('http://localhost:3001/api/musics', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, band }),
		})
		const data = await res.json()
		setMusicList([...musicList, data])
		setName('')
		setBand('')
	}

	const updateMusic = async (id: string) => {
		if(name !== '' && band !== '') {
			const res = await fetch(`http://localhost:3001/api/musics/${id}`, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, band })
			})

			const data = await res.json()

			const index = musicList.findIndex(x => x._id === id)
			musicList[index] = data
			setMusicList([ ...musicList ])
			setName('')
			setBand('')
		}
	}

	const deleteMusic = async (id: string) => {
		await fetch(`http://localhost:3001/api/musics/${id}`, {
			method: 'DELETE'
		})

		musicList.splice(musicList.findIndex(x => x._id === id), 1)
		setMusicList([...musicList])
	}

	return ( 
		<div className="container">
			<h1 className="display-1">Music List</h1>

			<div className={styles.add}>
				<FormControl 
				placeholder="Music" 
				className={styles.input}
				onChange={(e) => setName(e.target.value)}
				value={name} 
				/>

				<FormControl 
				placeholder="Band" 
				className={styles.input} 
				onChange={(e) => setBand(e.target.value)}
				value={band}
				/>
				
				<Button variant="success" className={styles.input} onClick={addMusic}>Add</Button>
			</div>

			<Table>
				<thead>
					<tr>
						<th>Music</th>
						<th>Band</th>
						<th className={styles.buttons}></th>
						<th className={styles.buttons}></th>
					</tr>
				</thead>
				<tbody>
				{
					musicList && musicList.map(music => 
						<tr key={music._id}>
							<td>{ music.name }</td>
							<td>{ music.band }</td>
							<td><Button variant="primary" onClick={() => updateMusic(music._id)}>Update</Button></td>
							<td><Button variant="danger" onClick={() => deleteMusic(music._id)}>Delete</Button></td>
						</tr>
					)
				}
				</tbody>
			</Table>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('http://localhost:3001/api/musics')
	const data = await response.json()

	return {
		props: {
			musics: data
		},
	}
}
