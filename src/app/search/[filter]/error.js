'use client';

export default function ErrorSearch({error}) {
  return (
    <div>
      <h1>Error Occurred</h1>
      <p>{error.message}</p>
    </div>
  );
}
