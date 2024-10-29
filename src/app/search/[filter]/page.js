import SearchPageList from '@/components/search-page';
import {getSearchMovie} from '@/lib/movie.lib';

export default async function SearchFilteredPage(context) {
  const param = await context.params;

  const encodedQuery = decodeURIComponent(param.filter);

  const {results, total_movies, total_page} = await getSearchMovie(encodedQuery);

  return (
    <div className='flex flex-col gap-4 grow'>
      <h2 className='text-base font-light text-center'>'{total_movies}' movies matches</h2>

      <SearchPageList
        initialResults={results}
        initialPage={1}
        totalPages={total_page}
        searchQuery={encodedQuery}
      />
    </div>
  );
}
