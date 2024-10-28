'use client';

import {useRouter, usePathname} from 'next/navigation';
import {useState} from 'react';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();

  const searchUrl = decodeURIComponent(pathname.split('/')[2] || '');

  const [searchTerm, setSearchTerm] = useState(searchUrl);
  const [loading, setLoading] = useState(false);

  const HeadingText = searchUrl ? `Result for '${searchTerm}'` : 'Find your movie here!!!';

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center justify-center gap-2 ${searchUrl ? '' : 'grow'} `}>
      <h1 className='text-lg font-medium'>{HeadingText}</h1>
      <div className='flex gap-2 overflow-hidden bg-white rounded-lg'>
        <input
          type='text'
          className='px-3 py-1'
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
