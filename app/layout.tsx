import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Nigerian Residential Wiring Academy',
  description: 'Premium vocational platform for Nigerian residential electrical installation standards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-navy text-slate-100 antialiased">
      <body className={`${inter.variable} font-sans bg-navy`}>{children}</body>
    </html>
  );
}
