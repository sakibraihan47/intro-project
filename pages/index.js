import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>TreeShop | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolore necessitatibus omnis natus ex, consequuntur officia ipsa
          dolores earum, deleniti, corporis ipsum excepturi id debitis
          cupiditate minima voluptates fugit cumque?
        </p>
        <Link href="/reckless">
          <a className={styles.btn}>See The List of Reckless</a>
        </Link>
      </div>
    </>
  );
}
