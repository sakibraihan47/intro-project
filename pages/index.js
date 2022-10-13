import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>TreeShop | Home</title>
      </Head>

      <div>
        <h1 className="styles.">TreeShop</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolore necessitatibus omnis natus ex, consequuntur officia ipsa
          dolores earum, deleniti, corporis ipsum excepturi id debitis
          cupiditate minima voluptates fugit cumque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat dolore necessitatibus omnis
          natus ex, consequuntur officia ipsa dolores earum, deleniti, corporis
          ipsum excepturi id debitis cupiditate minima voluptates fugit cumque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolore necessitatibus omnis natus ex, consequuntur officia ipsa
          dolores earum, deleniti, corporis ipsum excepturi id debitis
          cupiditate minima voluptates fugit cumque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat dolore necessitatibus omnis
          natus ex, consequuntur officia ipsa dolores earum, deleniti, corporis
          ipsum excepturi id debitis cupiditate minima voluptates fugit cumque?
        </p>

        <Link href="/signup">
          <a className={styles.btn}>Sign Up Here!</a>
        </Link>
      </div>
    </>
  );
}
