import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Marcin Krawczyk - Software Deveeloper, Based in Luzern, Switzerland
        </title>
        <meta
          name="description"
          content="Marcin Krawczyk - Software Deveeloper, Based in Luzern, Switzerland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Marcin Krawczyk</h1>

        <p className={styles.description}>
          Software Developer, based in Luzern, Switzerland.
        </p>
        <div className={styles.links}>
          <Link href="/github">
            <a className={styles.link}>Github</a>
          </Link>
          <Link href="/instagram">
            <a className={styles.link}>Instagram</a>
          </Link>
          <Link href="/twitch">
            <a className={styles.link}>Twitch</a>
          </Link>
          <Link href="/linkedin">
            <a className={styles.link}>LinkedIn</a>
          </Link>
          <Link href="/twitter">
            <a className={styles.link}>Twitter</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
