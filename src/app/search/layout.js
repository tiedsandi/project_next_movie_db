import SearchInput from '@/components/search-input';
import Link from 'next/link';

export default function SearchLayout({children}) {
  return (
    <main className='flex flex-col min-h-screen gap-2 '>
      <Link href={'/'} className='text-2xl font-bold '>
        MovieDB
      </Link>
      <SearchInput />
      {children}
    </main>
  );
}
