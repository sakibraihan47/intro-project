//function for fetch getStaticProps
import styles from "../../styles/Reckless.module.css";
import Link from "next/link";
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
  );
};

export default Reckless;
