import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const metadata: Metadata = {
  title: 'O Nas - Nasza Historia i Wartości',
  description: 'Poznaj BuildNext - wiodącą firmę budowlaną z 11-letnim doświadczeniem. Budujemy z doskonałością, innowacją i zaangażowaniem od 2010 roku. Ponad 400 udanych projektów.',
  openGraph: {
    title: 'O BuildNext - Nasza Historia i Wartości',
    description: 'Poznaj naszą historię, misję i wartości. BuildNext buduje doskonałość z zaangażowaniem i innowacją od 2010 roku.',
  },
};

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Doskonałość',
      description: 'Dążymy do doskonałości w każdym projekcie, dostarczając jakość przekraczającą oczekiwania',
    },
    {
      icon: Shield,
      title: 'Uczciwość',
      description: 'Uczciwość i przejrzystość kierują wszystkimi naszymi relacjami biznesowymi i decyzjami',
    },
    {
      icon: TrendingUp,
      title: 'Innowacyjność',
      description: 'Przyjmujemy nowe technologie i metody, aby być liderem w branży',
    },
    {
      icon: Users,
      title: 'Partnerstwo',
      description: 'Budujemy trwałe relacje oparte na zaufaniu, współpracy i obopólnym sukcesie',
    },
  ];

  const stats = [
    { value: '48+', label: 'Lat Łącznego Doświadczenia' },
    { value: '400+', label: 'Udanych Projektów' },
    { value: '92%', label: 'Utrzymanie Klientów' },
    { value: '150+', label: 'Nagród Branżowych' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">O BuildNext</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Budujemy doskonałość z zaangażowaniem i innowacją od 2010 roku
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Nasza Historia</h2>
              <p className="text-gray-600 mb-4">
                BuildNext został założony w 2010 roku z wizją przekształcenia branży budowlanej
                poprzez innowacje, zrównoważony rozwój i doskonałość. To, co zaczęło się jako mały zespół
                pasjonatów budownictwa, przekształciło się w wiodącą firmę budowlaną.
              </p>
              <p className="text-gray-600 mb-4">
                Przez lata zrealizowaliśmy setki projektów, od domów mieszkalnych do
                dużych kompleksów komercyjnych. Nasze zaangażowanie w jakość i satysfakcję klienta
                zapewniło nam reputację jednej z najbardziej zaufanych firm budowlanych w
                regionie.
              </p>
              <p className="text-gray-600">
                Dziś nadal przekraczamy granice, przyjmujemy nowe technologie i dostarczamy
                wyjątkowe rezultaty, które przetrwają próbę czasu.
              </p>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663058480259-2213d39f4f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc2NjIzMjkxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pracownicy budowlani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Target size={32} className="text-gray-900" />
              </div>
              <h3 className="text-3xl mb-4">Nasza Misja</h3>
              <p className="text-gray-600">
                Dostarczać wyjątkowe usługi budowlane, które przekraczają oczekiwania klientów, przy
                zachowaniu najwyższych standardów bezpieczeństwa, jakości i zrównoważonego rozwoju. Jesteśmy
                zaangażowani w budowanie trwałych relacji i tworzenie wartości dla wszystkich
                interesariuszy.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-gray-900" />
              </div>
              <h3 className="text-3xl mb-4">Nasza Wizja</h3>
              <p className="text-gray-600">
                Być najbardziej zaufaną i innowacyjną firmą budowlaną, uznaną za nasze
                zaangażowanie w doskonałość, zrównoważony rozwój i rozwój społeczności. Widzimy
                przyszłość, w której każdy podejmowany przez nas projekt przyczynia się pozytywnie do społeczeństwa i
                środowiska.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Podstawowe Wartości Kierujące Każdym Projektem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nasze wartości są fundamentem wszystkiego, co robimy, kierując naszymi decyzjami i kształtując
              naszą kulturę
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-yellow-400" />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">W Liczbach</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2 text-yellow-400">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Budujemy by Trwało</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dla Ludzi, Społeczności i Planety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-gray-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Jakość Rzemiosła</h3>
                <p className="text-gray-600">
                  Każdy projekt jest wykonywany z drobiazgową dbałością o szczegóły i doskonałym
                  rzemiosłem, które przetrwa próbę czasu.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Shield size={24} className="text-gray-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Bezpieczeństwo Przede Wszystkim</h3>
                <p className="text-gray-600">
                  Utrzymujemy najwyższe standardy bezpieczeństwa na wszystkich naszych placach budowy, zapewniając
                  dobrostan naszego zespołu i klientów.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-gray-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Infrastruktura Przyszłości</h3>
                <p className="text-gray-600">
                  Budujemy zrównoważone struktury, które zawierają najnowszą technologię i
                  najlepsze praktyki środowiskowe.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-gray-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Doświadczony Zespół</h3>
                <p className="text-gray-600">
                  Nasi wykwalifikowani profesjonaliści wnoszą dziesięciolecia łącznego doświadczenia do każdego projektu,
                  który podejmujemy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Gotowy, by Zbudować Coś Wspaniałego?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Porozmawiajmy o tym, jak możemy pomóc wcielić Twój projekt budowlany w życie
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-3 rounded hover:bg-yellow-500 transition-colors"
          >
            Skontaktuj się z Nami Dziś
          </Link>
        </div>
      </section>
    </div>
  );
}
