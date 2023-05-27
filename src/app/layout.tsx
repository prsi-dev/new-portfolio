import GoBack from '@/components/navigation/GoBack';

import styles from './page.module.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navigation/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welcome',
  description: 'Created by Pedro Rodriguez',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
