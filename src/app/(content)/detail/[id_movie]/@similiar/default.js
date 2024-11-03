import {getSimiliarMovie} from '@/lib/movie.lib';
import Image from 'next/image';
import Link from 'next/link';

export default async function SimiliarMovie({params}) {
  const {id_movie} = await params;
  const {results} = await getSimiliarMovie(id_movie);

  if (results.length == 0) {
    return (
      <div className='flex flex-wrap justify-center gap-6 sm:justify-between'>
        No similar movies found.
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center gap-6 sm:justify-between '>
      {results.map((result) => {
        return (
          <Link
            key={result.id}
            href={`/detail/2`}
            className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
            <div className='relative w-full h-80'>
              <Image
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                    : '/noimage.webp'
                }
                alt={result.title}
                priority
                className='object-cover rounded-lg'
                quality={50}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
              />
            </div>
            <div className='flex justify-between'>
              <h3>{result.title}</h3>
              <p>2024</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
