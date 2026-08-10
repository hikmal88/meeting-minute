import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Meeting Minute', description: 'Pengurusan minit mesyuarat digital' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body>{children}</body></html>;
}