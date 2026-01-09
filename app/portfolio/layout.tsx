import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Nasze Projekty Budowlane',
  description: 'Odkryj portfolio DKW DEWELOPMENT - setki udanych projektów budowlanych. Budownictwo komercyjne, mieszkaniowe i infrastruktura w całej Polsce. Zobacz nasze realizacje.',
  openGraph: {
    title: 'Portfolio DKW DEWELOPMENT - Nasze Projekty Budowlane',
    description: 'Zobacz nasze portfolio udanych projektów budowlanych. Komercyjne, mieszkaniowe i infrastrukturalne realizacje w całej Polsce.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
