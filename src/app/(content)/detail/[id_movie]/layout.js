export default function DetailLayout({detail, similiar}) {
  return (
    <div className='flex flex-col h-full gap-6'>
      <div className='relative flex grow sm:h-2/3'>{detail}</div>
      <div className='relative flex flex-col gap-3 h-1/3'>
        <h2 className='text-lg font-bold'>Similiar Movies</h2>
        {similiar}
      </div>
    </div>
  );
}
