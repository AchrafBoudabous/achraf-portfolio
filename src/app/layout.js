import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../styles/globals.css';
import { JetBrains_Mono, Syne } from 'next/font/google';

const BUILD_YEAR = new Date().getUTCFullYear();

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
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
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <Navigation />
          {children}
          <footer style={{
            textAlign: 'center',
            padding: '1.5rem 2rem',
            borderTop: '1px solid var(--border-color)',
            marginTop: '4rem',
            color: 'var(--text-muted)',
            background: 'var(--bg-base)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
          }}>
            <p>© {BUILD_YEAR} Achraf Boudabous. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}