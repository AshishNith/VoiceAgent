import { Public_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

export const metadata = {
  title: 'Agenix AI - Voice Assistant',
  description: 'Agenix AI Voice Assistant - Embedded Voice Widget',
};

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

const commitMono = localFont({
  src: [
    {
      path: '../fonts/CommitMono-400-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-700-Regular.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-400-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/CommitMono-700-Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-commit-mono',
});

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export async function RootLayout({ children, className }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn('m-0 scroll-smooth p-0', className)}>
      <body
        className={cn(
          publicSans.variable,
          commitMono.variable,
          'm-0 overflow-x-hidden p-0 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
