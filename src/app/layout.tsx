import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import { ThemeProviders } from '@/libs/themeProvider';
import './globals.css';
import Header from './components/global/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Max Garcia",
  description: "Max Garcia Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProviders>
          <Header />
          <main className='flex min-h-screen w-full flex-col'>
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
