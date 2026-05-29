import type { Metadata } from 'next';
import SkipLink from '@/components/SkipLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './print.css';

export const metadata: Metadata = {
  title: {
    default: 'Quentin Tripognez | Développeur Informatique',
    template: '%s | Quentin Tripognez',
  },
  description:
    'Portfolio de Quentin Tripognez, développeur informatique fullstack. Alternant en SI chez Keolis Amiens. BUT Informatique, spécialisé en développement web et systèmes d\'information.',
  keywords: [
    'développeur web',
    'développeur fullstack',
    'informatique',
    'alternance',
    'React',
    'Angular',
    'PHP',
    'Laravel',
  ],
  authors: [{ name: 'Quentin Tripognez', url: 'https://quentin-tripognez.fr' }],
  creator: 'Quentin Tripognez',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://quentin-tripognez.fr',
    siteName: 'Quentin Tripognez - Portfolio',
    title: 'Quentin Tripognez | Développeur Informatique Fullstack',
    description:
      'Développeur informatique fullstack, alternant en SI. BUT Informatique. Spécialisé en React, Angular, PHP/Laravel.',
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
    title: 'Quentin Tripognez | Développeur Informatique',
    description:
      'Développeur fullstack - Alternant SI - BUT Informatique',
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
