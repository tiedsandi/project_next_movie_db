'use client';

import {useRouter} from 'next/navigation';
import {useState, useRef} from 'react';

export default function SearchInput() {
  const router = useRouter();
  const searchRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const searchTerm = searchRef.current.value;

    router.push(`/search/${searchTerm}`);

    setLoading(false);
  };
  return (
    <>
      <form className='flex flex-col items-center justify-center gap-2 grow'>
        <h1 className='text-lg font-medium'>Find your movie here!!!</h1>
        <div className='flex gap-2 overflow-hidden bg-white rounded-lg '>
          <input
            type='text'
            className='px-3 py-1 '
            ref={searchRef}
            name='search'
            placeholder='Search Movies...'
          />
          <button
            type='submit'
            className='px-3 py-1 bg-primary'
            onClick={handleSubmit}
            disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
    </>
  );
}
