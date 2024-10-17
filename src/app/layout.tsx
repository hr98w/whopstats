import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import '../styles/globals.css';
import '../styles/layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { NextUIProvider } from '@nextui-org/react';
import { Footer } from '@/components/home/footer/footer';
import UmamiAnalytic from '@/components/analytic/UmamiAnalytic';

export const metadata: Metadata = {
  metadataBase: new URL('https://whopstats.com'),
  title: 'WhopStats - Whop Product Reviews & Sales Insights',
  description:
    'Explore WhopStats for in-depth product reviews and sales data on Whop.com, helping creators and developers find inspiration and refine their strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={'min-h-full dark'}>
      <body className={GeistSans.className}>
        <NextUIProvider>
          <ThemeProvider>
            <div className="flex-grow flex flex-col min-h-screen">{children}</div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </NextUIProvider>
        <UmamiAnalytic />
      </body>
    </html>
  );
}
