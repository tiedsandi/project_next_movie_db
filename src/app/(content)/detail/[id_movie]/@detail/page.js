import {getDetailMovie} from '@/lib/movie.lib';
import Image from 'next/image';
import {notFound} from 'next/navigation';

export async function generateMetadata({params}) {
  const {id_movie} = await params;

  const movie = await getDetailMovie(id_movie);
  if (!movie) {
    return {
      title: `Not Found`,
      description: `Error 404`,
    };
  }

  return {
    title: `Details for '${movie.title}'`,
    description: `${movie.overview}`,
  };
}

export default async function DetailPage({params}) {
  const {id_movie} = await params;

  const movie = await getDetailMovie(id_movie);

  if (!movie) {
    notFound();
  }

  return (
    <>
      <Image
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : '/no-image.png'
        }
        alt={movie.title}
        fill
        priority
        className={`z-[-2] object-cover rounded-md img ${
          !movie.backdrop_path ? 'object-center' : 'object-top'
        }`}
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
      />
      <div className='absolute z-[-1] w-full h-full p-0 opacity-70 bg-gray-950' />
      <div className='flex flex-col items-center self-end w-full gap-5 p-4 sm:flex-row sm:items-start '>
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : '/noimage.webp'
          }
          alt={movie.title}
          priority
          className='rounded-lg '
          quality={50}
          width={220}
          height={200}
          style={{width: '14rem', height: 'auto'}}
        />
        <div className='flex flex-col self-center gap-3 sm:w-2/3'>
          <h2 className='text-2xl font-bold text-center sm:text-left'>{movie.title}</h2>
          <div>
            <p>
              <span className='text-lg font-bold'>Rating: </span>
              {Math.round(movie.vote_average)} / 10
            </p>
            <p>
              <span className='text-lg font-bold'>Release Date: </span>
              {movie.release_date}
            </p>
            <p>
              <span className='text-lg font-bold'>Genre: </span>
              {movie.genres.reduce((acc, genre, index) => {
                return acc.concat(
                  <span key={genre.id}>
                    {genre.name}
                    {index < movie.genres.length - 1 ? ', ' : ''}
                  </span>
                );
              }, [])}
            </p>
          </div>
          <div>
            <h2 className='text-lg font-bold'>Overview: </h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
