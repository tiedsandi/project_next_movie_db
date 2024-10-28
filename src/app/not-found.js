import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-3'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image
        src={'/not-found.svg'}
        alt='not found'
        width={400}
        height={400}
        className='img'
        priority
      />
      <Link href='/' className='hover:text-primary-2'>
        Return Home
      </Link>
    </main>
  );
}
