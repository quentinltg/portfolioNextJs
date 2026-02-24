import type { Metadata } from 'next';
import SkipLink from '@/components/SkipLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './print.css';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio Éco-responsable | Développeur Web',
    template: '%s | Portfolio Éco-responsable',
  },
  description:
    'Portfolio de développeur web spécialisé en éco-conception, performance et accessibilité. Découvrez mes projets optimisés pour un web durable.',
  keywords: [
    'développeur web',
    'éco-conception',
    'performance web',
    'accessibilité',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Quentin', url: 'https://example.com' }],
  creator: 'Quentin',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://example.com',
    siteName: 'Portfolio Éco-responsable',
    title: 'Portfolio Éco-responsable | Développeur Web',
    description:
      'Développeur web spécialisé en éco-conception et performance. Découvrez mes projets web durables.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Éco-responsable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Éco-responsable | Développeur Web',
    description:
      'Développeur web spécialisé en éco-conception et performance.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Ajouter codes de vérification si nécessaire
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
