//function for fetch getStaticProps
import styles from "../../styles/Reckless.module.css";
import Link from "next/link";
import Head from "next/head";
export const getStaticProps = async () => {
  //fetch request

  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return {
    props: { reckless: data },
  };
};

const Reckless = ({ reckless }) => {
  return (
    <>
      <Head>
        <title>TreeShop | Customer</title>
      </Head>

      <div>
        <h1>Reckless List</h1>

        {reckless.map((reck) => (
          <Link href={"/reckless/" + reck.id} key={reck.id}>
            <a className={styles.single}>
              <h3>{reck.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Reckless;
