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
            className:
              'bg-white text-black rounded-lg flex items-center gap-4 p-4 shadow-lg',
            classNames: {
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
