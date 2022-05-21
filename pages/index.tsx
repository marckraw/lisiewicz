import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lisiewicz Design</title>
        <meta name="description" content="Greatness." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lisiewicz Design</h1>

        <div className={styles.links}>
          <Link href="/instagram">
            <a className={styles.link}>Instagram</a>
          </Link>
          <Link href="/facebook">
            <a className={styles.link}>Facebook</a>
          </Link>
          <Link href="/owner">
            <a className={styles.link}>Owner</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
