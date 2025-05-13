import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';
import metaInfo from '@/data/meta/base.json';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const {
  title,
  description,
  keywords,
  manifest,
  twitter,
  openGraph,
  icons,
  robots,
} = metaInfo;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  alternates: {
    canonical: baseUrl,
  },
  manifest,
  keywords,
  twitter,
  openGraph: { ...openGraph, url: `${baseUrl}` },
  icons,
  robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-950 text-white`}
      >
        <Toaster
          position="top-center"
          duration={3000}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                'sm:fixed sm:top-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[90%] sm:max-w-sm rounded-lg p-4 shadow-lg flex items-center gap-2 text-white',
              error: 'bg-red-500',
              success: 'bg-green-500',
              warning: 'bg-yellow-400 text-black',
              info: 'bg-blue-500',
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
