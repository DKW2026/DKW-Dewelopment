import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Poppins } from 'next/font/google'
import './styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://buildnext.pl'),
  title: {
    default: 'DKW DEVELOPMENT - Profesjonalne Usługi Budowlane | Budownictwo Komercyjne i Mieszkaniowe',
    template: '%s | DKW DEVELOPMENT'
  },
  description: 'DKW DEVELOPMENT to wiodąca firma budowlana specjalizująca się w budownictwie komercyjnym, mieszkaniowym oraz renowacjach. Ponad 400 zrealizowanych projektów i 11 lat doświadczenia.',
  keywords: ['firma budowlana', 'budownictwo komercyjne', 'budownictwo mieszkaniowe', 'renowacje', 'zarządzanie projektami budowlanymi', 'budowa domów', 'budowa biurowców', 'usługi budowlane Polska'],
  authors: [{ name: 'DKW DEVELOPMENT' }],
  creator: 'DKW DEVELOPMENT',
  publisher: 'DKW DEVELOPMENT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://buildnext.pl',
    siteName: 'DKW DEVELOPMENT',
    title: 'DKW DEVELOPMENT - Profesjonalne Usługi Budowlane',
    description: 'Wiodąca firma budowlana w Polsce. Budownictwo komercyjne, mieszkaniowe i renowacje. Ponad 400 projektów, 11 lat doświadczenia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DKW DEVELOPMENT - Profesjonalne Usługi Budowlane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DKW DEVELOPMENT - Profesjonalne Usługi Budowlane',
    description: 'Wiodąca firma budowlana w Polsce. Budownictwo komercyjne, mieszkaniowe i renowacje.',
    images: ['/og-image.jpg'],
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
    google: 'verification_token',
  },
};

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={poppins.className}>
      <head>
        <link rel="canonical" href="https://buildnext.pl" />
       </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
