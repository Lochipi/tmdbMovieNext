import styles from "./page.module.css";

export default async function MovieDetail({ params }) {
  const { id } = params;
  //   const imagePath = "https://image.tmdb.org/t/p/w400";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div className={styles.container}>
      <h2>{res.title}</h2>
      <p>{res.status}</p>
    </div>
  );
}
