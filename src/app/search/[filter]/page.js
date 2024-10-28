import GetYear from '@/lib/function';
import Image from 'next/image';
import Link from 'next/link';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Inception',
    release_date: '2010-07-16',
    poster_path: '/5ds86rcR01tHvgsNimlQoIFFlqB.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
  {
    id: 3,
    title: 'The Shawshank Redemption',
    release_date: '1994-10-14',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    release_date: '1994-09-10',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
  {
    id: 5,
    title: 'The Godfather',
    release_date: '1972-03-14',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
  {
    id: 6,
    title: 'Eternal Sunshine of the Spotless Mind',
    release_date: '2004-03-19',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
  {
    id: 7,
    title: 'Casablanca',
    release_date: '1942-09-15',
    poster_path: '/7618a3snKR8gammeNPfWzrJa7WL.jpg',
  },
];

export default function SearchFilteredPage() {
  return (
    <div className='flex flex-col gap-4 grow'>
      <h2 className='text-base font-light text-center'>'7' movies matches</h2>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {DUMMY_DATA.map((movie) => (
          <Link
            href={`/detail/${movie.id}`}
            key={movie.id}
            className='flex flex-col gap-2 hover:shadow-3xl'>
            <div className='relative w-full h-80'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                priority
                className='object-cover'
                quality={50}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
              />
            </div>
            <div className='flex justify-between'>
              <h3>{movie.title}</h3>
              <p>{GetYear(movie.release_date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
