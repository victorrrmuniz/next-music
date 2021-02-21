import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Music TESTE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/musics">
        <a className={`display-1 ${styles.header}`}>Musics</a>
      </Link>
    </div>
  )
}
