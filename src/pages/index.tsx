import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>igNews</title>
      </Head>

      <main className={styles.headerContainer}>
        <section className={styles.hero}>
          <span>👏 hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>

          <p>
            bet access to all the publications <br />
            <span>for $ 9.50 month</span>
          </p>
        </section>

        <Image src='/images/mulher.svg' alt='logo' width={300} height={521} />
      </main>
    </>

  )
}
