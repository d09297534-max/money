import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Fraunces — editorial serif. Optical sizing gives it the "private bank" feel.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// We use the system Geist via next/font/google fallback chain, but to keep this
// self-contained without extra installs, we declare a CSS variable that Tailwind
// picks up. The chain falls back gracefully.
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AORO MONEY — Private Wealth Operating System',
  description:
    'A private bank, reimagined for the modern principal. Discreet, instrumented, and globally fluent.',
  metadataBase: new URL('https://aoromoney.example'),
  openGraph: {
    title: 'AORO MONEY',
    description: 'Private banking, instrumented.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
