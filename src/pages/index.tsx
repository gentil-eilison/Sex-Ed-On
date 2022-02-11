import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Form from '../components/Form'

import homePic from '../assets/images/sex_ed_2.jpg'

export default function Home() {
  return (
      <>
        <Head>
          <title>Sex Ed-On | Educação Sexual Online</title>
          <meta name="description" content="Site para aprender educação sexual online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.hcontainer}>
          <h1 className={styles.htitle}>SEX ED-ON</h1>
          <h2 className={styles.hsubtitle}>Aprenda educação sexual online</h2>
        </header>

        <main>
            <Image
              src={homePic}
              alt="Condoms, pills and people learning about sex ed."
              width={1000}
              height={500}
            ></Image>
            <Form action='/login' method='POST'></Form>
        </main>
      </> 
  )
}
