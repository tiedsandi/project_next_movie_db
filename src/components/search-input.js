'use client';

import {useRouter, usePathname} from 'next/navigation';
import {useState} from 'react';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();

  const searchUrl = decodeURIComponent(pathname.split('/')[2] || '');

  const [searchTerm, setSearchTerm] = useState(searchUrl);
  const [loading, setLoading] = useState(false);

  const HeadingText = searchUrl ? `Result for '${searchUrl}'` : 'Find your movie here!!!';

  const handleSubmit = async (event) => {
    console.log(loading);
    setLoading(true);
    event.preventDefault();
    if (searchTerm.trim()) {
      await router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center justify-center gap-2 ${searchUrl ? '' : 'grow'}  `}>
      <h1 className='text-lg font-medium'>{HeadingText}</h1>
      <div className='flex gap-2 overflow-hidden bg-white rounded-lg md:w-1/2'>
        <input
          type='text'
          className='py-1 pl-3 pr-1 grow'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name='search'
          placeholder='Search Movies...'
        />
        <button type='submit' className='px-3 py-1 bg-primary' disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
