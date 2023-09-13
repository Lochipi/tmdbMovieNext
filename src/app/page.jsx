import styles from "./page.module.css";
import Movie from "../components/movie/Movie";
import SearchBar from "@/components/searchbar/Search";

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

  return (
    <div className={styles.main}>
      <div>
        <SearchBar />
      </div>
      <div className={styles.flex}>
        {data.results.map((movie) => (
          <>
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote={movie.vote_average}
            />
          </>
        ))}
      </div>
    </div>
  );
}
