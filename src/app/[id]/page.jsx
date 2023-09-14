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
      <h2 className={styles.title}>{res.title}</h2>
      <p className={styles.releasedate}>
        <span className={styles.desc}>Released On:</span> {res.release_date}
      </p>
      <p className={styles.runtime}>
        <span className={styles.desc}>Runtime: </span>
        {res.runtime} Min
      </p>
      <p className={styles.status}>
        <span className={styles.desc}>Status:</span> {res.status}
      </p>
      <Image
        className={styles.img}
        unoptimized
        width={500}
        height={300}
        src={imagePath + res.backdrop_path}
        alt={res.title}
        priority
      />
      <p className={styles.overview}>
        <span className={styles.reviewdesc}>Overview: </span>
        {res.overview}
      </p>
    </div>
  );
}
