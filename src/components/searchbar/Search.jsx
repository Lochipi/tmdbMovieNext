import styles from "./page.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <h2>Search your fav film here</h2>
      <input className={styles.input} type="text" placeholder="Top Gun II" />
      <button className={styles.btn}>Search</button>
    </div>
  );
}

export default SearchBar;
