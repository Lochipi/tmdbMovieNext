import Image from "next/image";
import Link from "next/link";

function movie(props) {
  const imagePath = "https://image/tmdb.org/t/p/original";
  //   console.log(props.poster_path);
  return (  
    <div key={props.id}>
      <h4>{props.title}</h4>
      <p>{props.release_date}</p>
      <Link href={`akjs`}>
        <Image
          unoptimized
          src={imagePath + props.poster_path}
          width={400}
          height={200}
          alt={props.title}
        />
      </Link>
    </div>
  );
}

export default movie;
