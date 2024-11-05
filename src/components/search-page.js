'use client';

import GetYear from '@/lib/function.lib';
import Image from 'next/image';
import Link from 'next/link';
import {getMoreMovie} from '@/lib/movie.lib';
import {useState} from 'react';

export default function SearchPageList({initialResults, initialPage, totalPages, searchQuery}) {
  const [results, setResults] = useState(initialResults);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentPage < totalPages) {
      setLoading(true);
      const newPage = currentPage + 1;
      const newResults = await getMoreMovie(searchQuery, newPage);
      console.log(newResults);

      setResults([...results, ...newResults]);
      setCurrentPage(newPage);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {results.map((movie) => (
          <Link
            href={`/detail/${movie.id}`}
            key={movie.id}
            className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl'>
            <div className='relative w-full h-80'>
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/noimage.webp'
                }
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
      <div className={`${currentPage < totalPages ? '' : 'hidden'} text-center`}>
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className='px-3 py-1 rounded-lg bg-secondary'>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </>
  );
}
