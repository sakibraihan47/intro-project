import styles from "../../styles/Reckless.module.css";
import Image from "next/Image";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  const paths = data.map((reck) => {
    return {
      params: { id: reck.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();

  return {
    props: { reck: data },
  };
};

const Details = ({ reck }) => {
  return (
    <>
      <Image src={reck.image} width={240} height={360} />
      <div>
        <h1>{reck.title}</h1>
        <p>{reck.description}</p>
        <h1>Category: {reck.category}</h1>
        <h1>Price: {reck.price}</h1>{" "}
        <p>
          User Rating: {reck.rating.rate} ({reck.rating.count})
        </p>{" "}
      </div>
      <button className={styles.count_btn}>ADD</button>
    </>
  );
};

export default Details;
