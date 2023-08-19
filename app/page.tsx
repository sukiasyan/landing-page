import Movie from './Movie'
import {MoviesProps} from "@/app/types";

export default async function Home() {
 const data = await fetch(
     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json()

  console.log('Function: Home - Line 9 - ', res);
  return (
    <main >
      Hello next 13
      {res.results.map((movie: MoviesProps)=>(
          <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          />
      ))}
    </main>
  )
}
