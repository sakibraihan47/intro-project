export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
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
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { reck: data },
  };
};

const Details = ({ reck }) => {
  return (
    <div>
      <h1>{reck.name}</h1>
      <p>{reck.email} </p>
      <p>{reck.website}</p>
      <p>{reck.address.city}</p>
    </div>
  );
};

export default Details;
