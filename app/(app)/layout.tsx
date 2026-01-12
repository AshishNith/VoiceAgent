import { RootLayout } from '@/components/root-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  return (
    <RootLayout className="bg-background">
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://agenix.ai"
          className="scale-100 transition-transform duration-300 hover:scale-110"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Agenix_logo.png"
            alt="Agenix AI Logo"
            className="block h-12 w-auto dark:block"
          />
        </a>
      </header>
      {children}
      <footer className="fixed bottom-0 left-0 flex w-full justify-center p-6">
        <p className="text-fg1 w-full max-w-prose pt-1 text-center text-xs leading-5 font-normal text-pretty md:text-sm">
          Need help? Reach out to us:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://agenix.ai"
            className="underline"
          >
            Agenix.ai
          </a>
        </p>
      </footer>
    </RootLayout>
  );
}
