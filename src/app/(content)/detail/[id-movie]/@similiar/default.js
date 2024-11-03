import Image from 'next/image';
import Link from 'next/link';

export default function SimiliarMovie() {
  return (
    <div className='flex flex-wrap justify-center gap-6 sm:justify-between '>
      <Link
        href={`/detail/2`}
        className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
        <div className='relative w-full h-80'>
          <Image
            src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
            alt={'title'}
            fill
            priority
            className='z-[-2] object-cover rounded-md'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
          />
        </div>
        <div className='flex justify-between'>
          <h3>Movie</h3>
          <p>2024</p>
        </div>
      </Link>
      <Link
        href={`/detail/2`}
        className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
        <div className='relative w-full h-80'>
          <Image
            src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
            alt={'title'}
            fill
            priority
            className='z-[-2] object-cover rounded-md'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
          />
        </div>
        <div className='flex justify-between'>
          <h3>Movie</h3>
          <p>2024</p>
        </div>
      </Link>
      <Link
        href={`/detail/2`}
        className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
        <div className='relative w-full h-80'>
          <Image
            src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
            alt={'title'}
            fill
            priority
            className='z-[-2] object-cover rounded-md'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
          />
        </div>
        <div className='flex justify-between'>
          <h3>Movie</h3>
          <p>2024</p>
        </div>
      </Link>
      <Link
        href={`/detail/2`}
        className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
        <div className='relative w-full h-80'>
          <Image
            src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
            alt={'title'}
            fill
            priority
            className='z-[-2] object-cover rounded-md'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
          />
        </div>
        <div className='flex justify-between'>
          <h3>Movie</h3>
          <p>2024</p>
        </div>
      </Link>
      <Link
        href={`/detail/2`}
        className='flex flex-col gap-2 shadow-white-sm hover:shadow-white-xl w-52'>
        <div className='relative w-full h-80'>
          <Image
            src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
            alt={'title'}
            fill
            priority
            className='z-[-2] object-cover rounded-md'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
          />
        </div>
        <div className='flex justify-between'>
          <h3>Movie</h3>
          <p>2024</p>
        </div>
      </Link>
    </div>
  );
}
