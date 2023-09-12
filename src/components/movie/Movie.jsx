import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

function movie({ poster_path, key, id, title, release_date, vote }) {
  const imagePath = "https://image.tmdb.org/t/p/w400";
  return (
    <div key={key}>
      <Link href={`/${id}`}>
        <Image
          className={styles.img}
          unoptimized
          src={imagePath + poster_path}
          width={300}
          height={200}
          alt={title}
        />
      </Link>
      <h6>{title}</h6>
      <p>{release_date}</p>
      <p>Rating: {vote}</p>
    </div>
  );
}

export default movie;
