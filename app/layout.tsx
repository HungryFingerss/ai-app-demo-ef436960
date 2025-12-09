import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurora – Modern Web App Starter',
  description: 'A beautiful Next.js starter homepage built with Tailwind CSS.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="h-full bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}