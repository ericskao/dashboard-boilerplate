import '@/app/ui/global.css';
import { SessionProvider } from 'next-auth/react';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${inter.className}`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
