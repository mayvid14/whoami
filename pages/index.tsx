import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeHead from '../components/HomeHead'

const prefix = process.env.NEXT_PUBLIC_PATH_PREFIX || '';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix + '/logo.png'}></link>
        <title>Divyam Nandanwar</title>
      </Head>
      <HomeHead />
    </>
  )
}
