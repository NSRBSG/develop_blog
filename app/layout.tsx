import { Metadata } from 'next';
import './globals.css';

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
    <html lang='kr'>
      <body>{children}</body>
    </html>
  );
}
