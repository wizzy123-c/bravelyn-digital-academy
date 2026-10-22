import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bravelyn Digital Academy',
  description: 'Learn practical digital, creative and AI-enabled skills with guided projects and portfolio-ready outcomes.',
  openGraph: {
    title: 'Bravelyn Digital Academy | Learn Practical Skills. Build Real Proof.',
    description: 'Learn practical digital, creative and AI-enabled skills through guided online training and project-based learning.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
