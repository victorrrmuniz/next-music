import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Music TESTE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Musics</h1>
    </div>
  )
}
