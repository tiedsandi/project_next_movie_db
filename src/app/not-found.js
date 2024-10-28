import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-3'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className='relative w-full h-64 img-notfound '>
        <Image src={'/not-found.svg'} alt='not found' fill priority />
      </div>
      <Link href='/' className='hover:text-primary'>
        Return Home
      </Link>
    </main>
  );
}
