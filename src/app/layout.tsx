import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import { ThemeProviders } from '@/libs/themeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <main>
          <ThemeProviders>
            {children}
          </ThemeProviders>
        </main>
      </body>
    </html>
  );
}
