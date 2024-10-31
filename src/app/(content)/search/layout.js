import SearchInput from '@/components/search-input';

export default function SearchLayout({children}) {
  return (
    <>
      <SearchInput />
      {children}
    </>
  );
}
