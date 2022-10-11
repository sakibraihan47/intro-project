//function for fetch getStaticProps
import styles from "../../styles/Reckless.module.css";
import Link from "next/link";
import Head from "next/head";
import Counter from "../../components/counter";

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
        <h2>Click on an Item name for description</h2>
        {reckless.map((reck) => (
          <div>
            <Link href={"/reckless/" + reck.id} key={reck.id}>
              <div className={styles.single}>
                <a>
                  <h3>{reck.name}</h3>
                </a>
              </div>
            </Link>
            <div className={styles.price}>
              <a>
                <h3>Price: {reck.id}</h3>
              </a>
            </div>
            <Counter />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reckless;
