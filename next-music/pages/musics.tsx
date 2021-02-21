
import { GetStaticProps } from 'next'
import { Button, Table } from 'react-bootstrap'

export default function Musics({ musics }) {
	return ( 
		<div className="container">
			<h1 className="display-1">Music List</h1>

			<Table>
				<thead>
					<tr>
						<th>Music</th>
						<th>Band</th>
					</tr>
				</thead>
				{
					musics.map(music => 
						<tr key={music._id}>
							<td>{ music.name }</td>
							<td>{ music.band }</td>
						</tr>
					)
				}
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
