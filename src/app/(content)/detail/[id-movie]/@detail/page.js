import Image from 'next/image';

export default function DetailPage() {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original/hUpHXyLRNvtt0AAwdPmUsSQQKB8.jpg`}
        alt={'title'}
        fill
        priority
        className='z-[-2] object-cover rounded-md'
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
      />
      <div className='absolute z-[-1] w-full h-full p-0 opacity-70 bg-gray-950' />
      <div className='flex flex-col items-center self-end w-full gap-5 p-4 sm:flex-row sm:items-start '>
        <Image
          src={`https://image.tmdb.org/t/p/original/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg`}
          alt={'halo'}
          priority
          className='rounded-lg '
          quality={50}
          width={220}
          height={200}
        />
        <div className='flex flex-col self-center gap-5 sm:w-1/2'>
          <div>
            <h2 className='text-2xl font-bold text-center sm:text-left'>
              Scouts Guide to the Zombie Apocalypse
            </h2>
            <p>
              <span className='text-lg font-bold'>Rating:</span> 3,4
            </p>
            <p>
              <span className='text-lg font-bold'>Release Date:</span> 2-12-2022
            </p>
            <p>
              <span className='text-lg font-bold'>Genre:</span> Comedy, Action, Horror
            </p>
          </div>

          <div>
            <h2 className='text-lg font-bold'>overview: </h2>
            <p>
              Three scouts and lifelong friends join forces with one badass cocktail waitress to
              become the world’s most unlikely team of heroes. When their peaceful town is ravaged
              by a zombie invasion, they’ll fight for the badge of a lifetime and put their scouting
              skills to the test to save mankind from the undead.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
