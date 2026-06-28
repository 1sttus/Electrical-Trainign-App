import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'NRWA | Nigerian Residential Wiring Academy',
  description: 'Premium educational platform for residential wiring, simulations, AI tutoring, practical inspection, exams, certification, and career readiness.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#f7f9fb] text-[#191c1e] antialiased">
      <body className={`${inter.variable} bg-[#f7f9fb] font-sans`}>{children}</body>
    </html>
  );
}
