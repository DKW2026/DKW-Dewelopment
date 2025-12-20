import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Skontaktuj się z Nami',
  description: 'Skontaktuj się z BuildNext. Darmowa konsultacja i wycena projektów budowlanych. Tel: +48 555 123 456. Odpowiadamy w 24h. Budownictwo komercyjne i mieszkaniowe.',
  openGraph: {
    title: 'Kontakt - BuildNext',
    description: 'Skontaktuj się z nami w sprawie Twojego projektu budowlanego. Darmowa konsultacja i szybka odpowiedź w 24h.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
