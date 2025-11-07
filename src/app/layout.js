import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

// Snapshot once to avoid hydration edge cases
const BUILD_YEAR = new Date().getUTCFullYear();

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Achraf Boudabous | Software Engineer',
    template: '%s | Achraf Boudabous',
  },
  description:
    'Building scalable, intelligent digital solutions with code and low-code platforms.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Azure',
    'Power Platform',
    'AI',
    'Automation',
  ],
  authors: [{ name: 'Achraf Boudabous' }],
  creator: 'Achraf Boudabous',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://achrafboudabous.vercel.app',
    title: 'Achraf Boudabous | Software Engineer',
    description:
      'Building scalable, intelligent digital solutions with code and low-code platforms.',
    siteName: 'Achraf Boudabous Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achraf Boudabous | Software Engineer',
    description:
      'Building scalable, intelligent digital solutions with code and low-code platforms.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* You can remove suppressHydrationWarning after confirming warnings are gone */}
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <Navigation />
          {children}
          <footer
            style={{
              textAlign: 'center',
              padding: '2rem',
              borderTop: '1px solid var(--border-color)',
              marginTop: '4rem',
              color: 'var(--text-secondary)',
              background: 'var(--light-bg)',
            }}
          >
            <p>© {BUILD_YEAR} Achraf Boudabous. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
