import Loading from '@/components/startbucks/loading';
import Nav from '@/components/startbucks/nav';
import { RouteChangeListener } from '@/components/startbucks/rotute-change-listener';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col leading font-sodo-sans selection:bg-teal-300 relative">
        <Suspense fallback={<Loading />}>
          <RouteChangeListener />
          <Nav />
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
