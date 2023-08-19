import Movie from './Movie'
import {MoviesProps} from "@/app/types";


export async function generateStaticParams() {
  const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,{next:{revalidate: 0}})

  const res = await data.json()
  return res.results.map((movie: MoviesProps)=>({
  movie: movie.id.toString(),
  }))
}

export default async function Home() {
 const data = await fetch(
     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,{next:{revalidate: 0}})

  const res = await data.json()

  return (
    <main >

<div className="grid gap-16 grid-cols-fluid">
      {res.results.map((movie: MoviesProps)=>(
          <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          />
      ))}
</div>
    </main>
  )
}
