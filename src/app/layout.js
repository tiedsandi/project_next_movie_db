import './globals.css';
import {Nunito} from 'next/font/google';

const nunitoFont = Nunito({
  subsets: ['latin'],
  variable: '--main-font',
});

export const metadata = {
  title: 'Movie Database',
  description:
    'Search for movies in the database, and return a list of movies that match the criteria specified.',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${nunitoFont.variable} container py-3 antialiased`}>{children}</body>
    </html>
  );
}
