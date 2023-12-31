import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components';

export const metadata: Metadata = {
  metadataBase: new URL('https://umar.codes'),
  title: {
    default: 'Umar Gora',
    template: '%s | Umar Gora',
  },
  description: 'Founder, engineer, and traveller.',
  openGraph: {
    title: 'Umar Gora',
    description: 'Founder, engineer, and traveller.',
    url: 'https://umar.codes',
    siteName: 'Umar Gora',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Umar Gora',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
