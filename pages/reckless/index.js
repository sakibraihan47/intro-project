//function for fetch getStaticProps
import styles from "../../styles/Reckless.module.css";
import Link from "next/link";
import Head from "next/head";
import Counter from "../../components/counter";
import Image from "next/image";

export const getStaticProps = async () => {
  //fetch request

  const res = await fetch("https://fakestoreapi.com/products/");
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
          <div className={styles.container}>
            <div className={styles.prod_img}>
              <Image src={reck.image} width={120} height={120} />
            </div>
            <Link href={"/reckless/" + reck.id} key={reck.id}>
              <div className={styles.single}>
                <div className={styles.title}>
                  <h3>{reck.title}</h3>
                </div>
              </div>
            </Link>
            <div className={styles.price}>
              <h3>Price: {reck.price}</h3>
            </div>
            <Counter />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reckless;
