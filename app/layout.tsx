import { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'NSRBSG',
  description: 'blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='kr'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
