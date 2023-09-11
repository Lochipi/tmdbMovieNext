import styles from "./page.module.css";
import Movie from "../components/movie/Movie";

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data.results);

  return (
    <div className={styles.main}>
      {data.results.map((movie) => (
        <>
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        </>
      ))}
      <h3>This is the main home page</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iure eos
        sed molestiae dolorum cupiditate reiciendis sapiente amet reprehenderit
        ducimus.
      </p>
    </div>
  );
}
