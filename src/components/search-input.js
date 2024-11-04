'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useState} from 'react';

export default function SearchInput() {
  const pathname = usePathname();
  const router = useRouter();
  const searchUrl = decodeURIComponent(pathname.split('/')[2] || '');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get('search').trim();

    if (searchTerm.length < 3) {
      setError('Please enter at least 3 characters.');
      return;
    }

    setError('');
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
    router.push('/search/' + encodeURIComponent(searchTerm));
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${searchUrl ? '' : 'grow'}`}>
      <h1 className='text-lg font-medium'>
        {searchUrl ? `Result for '${searchUrl}'` : 'Find your movie here!!!'}
      </h1>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
        <div className='flex gap-2 overflow-hidden bg-white rounded-lg md:w-1/2'>
          <input
            type='text'
            className='py-1 pl-3 pr-1 grow'
            name='search'
            placeholder='Search Movies...'
            defaultValue={searchUrl}
          />
          <button type='submit' className='px-3 py-1 bg-primary'>
            {isPending ? 'Searching...' : 'Go'}
          </button>
        </div>
      </form>
      {/* {isPending && <p>Submitting...</p>} */}
    </div>
  );
}
