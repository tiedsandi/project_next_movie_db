export default function SearchLayout({children}) {
  return (
    <div className=''>
      <form action='' className=''>
        <input type='text' className='text-primary' />
        <button type='submit'>Search</button>
      </form>
      {children}
    </div>
  );
}
