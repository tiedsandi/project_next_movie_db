import Link from 'next/link';

export default function ContentLayout({children}) {
  return (
    <main className='flex flex-col gap-2 content-container '>
      <Link href={'/'} className='text-2xl font-bold '>
        MovieDB
      </Link>
      {children}
    </main>
  );
}
