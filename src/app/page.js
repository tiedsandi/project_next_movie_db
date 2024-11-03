import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-[calc(100vh-0.75rem-0.75rem)]'>
      <h1 className='text-4xl font-bold text-center text-white'>Hallo, Folks!</h1>
      <Image src={'/home-img.png'} alt='hero' width={400} height={400} priority />
      <p className='mb-3 text-xl text-center text-white'>Go find your movies</p>
      <Link href={'/search'} className='px-4 py-2 bg-primary rounded-xl hover:bg-primary-2'>
        Get Started
      </Link>
    </main>
  );
}
