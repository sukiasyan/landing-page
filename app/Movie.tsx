import Link from "next/link";
import {MoviesProps} from "@/app/types";
import Image from "next/image";


export default function Movie({ id,
                                title,
                                poster_path,
                                release_date}: MoviesProps) {
  const imagePath = 'https://image.tmdb.org/t/p/original'

  return (
      <div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={'/asd'}>
          <Image src={imagePath + poster_path} width={800} height={800} alt={title}/>
        </Link>
      </div>
  )
}