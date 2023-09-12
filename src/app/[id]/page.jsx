import Image from "next/image";
import styles from "./page.module.css";

export default async function MovieDetail({ params }) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/w400";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div className={styles.container}>
      <h2>{res.title}</h2>
      <h2>{res.release_date}</h2>
      <h2>Runtime: {res.runtime}</h2>
      <p>{res.status}</p>
      <Image
        className={styles.img}
        unoptimized
        width={500}
        height={300}
        src={imagePath + res.backdrop_path}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
