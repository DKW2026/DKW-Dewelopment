import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export const metadata: Metadata = {
  title: 'Profesjonalne Usługi Budowlane',
  description: 'BuildNext - Kompleksowe usługi budowlane dla trwałego i innowacyjnego rozwoju. Budownictwo komercyjne, mieszkaniowe, renowacje i zarządzanie projektami. Ponad 400 zrealizowanych projektów.',
  openGraph: {
    title: 'BuildNext - Profesjonalne Usługi Budowlane',
    description: 'Kompleksowe usługi budowlane dla trwałego i innowacyjnego rozwoju. Ponad 400 projektów, 11 lat doświadczenia.',
  },
};

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Budownictwo Komercyjne',
      description: 'Wielkoskalowe projekty komercyjne realizowane z precyzją i wydajnością',
    },
    {
      icon: Users,
      title: 'Budownictwo Mieszkaniowe',
      description: 'Tworzymy wymarzone domy z dbałością o każdy szczegół',
    },
    {
      icon: TrendingUp,
      title: 'Usługi Remontowe',
      description: 'Modernizacja przestrzeni dzięki innowacyjnym rozwiązaniom',
    },
    {
      icon: Award,
      title: 'Zarządzanie Projektami',
      description: 'Kompleksowy nadzór i koordynacja projektów budowlanych',
    },
  ];

  const stats = [
    { value: '400+', label: 'Zrealizowanych Projektów' },
    { value: '11+', label: 'Lat Doświadczenia' },
    { value: '90+', label: 'Członków Zespołu' },
    { value: '100%', label: 'Zadowolenie Klientów' },
  ];

  const projects = [
    {
      title: 'Nowoczesny Kompleks Biurowy',
      category: 'Komercyjne',
      image: 'https://images.unsplash.com/photo-1714601344981-75e003bc5d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzfGVufDF8fHx8MTc2NjIzMjkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Luksusowy Budynek Mieszkalny',
      category: 'Mieszkaniowe',
      image: 'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYyMzI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Budynek Komercyjny',
      category: 'Komercyjne',
      image: 'https://images.unsplash.com/photo-1764983266679-751a8bbb54d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjYxNTY3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'Jan Kowalski',
      role: 'Dyrektor, Tech Corp',
      content: 'BuildNext przekształcił naszą wizję w rzeczywistość. Ich dbałość o szczegóły i zaangażowanie w jakość są bezkonkurencyjne.',
    },
    {
      name: 'Anna Nowak',
      role: 'Deweloper Nieruchomości',
      content: 'Praca z BuildNext to czysta przyjemność. Ukończyli nasz projekt na czas i przekroczyli nasze oczekiwania.',
    },
    {
      name: 'Michał Wiśniewski',
      role: 'Właściciel Domu',
      content: 'Nasz wymarzony dom stał się rzeczywistością dzięki BuildNext. Profesjonalizm, wydajność i prawdziwa troska.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762438441913-cd4ec8da39d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBleGNhdmF0b3IlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYyMzI5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6">
            Budujemy Marzenia w Rzeczywistość
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Kompleksowy Zakres Usług dla Zrównoważonego i Innowacyjnego Rozwoju
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              Zobacz Projekty <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-gray-900 transition-colors"
            >
              Uzyskaj Wycenę
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Kompleksowy Zakres Usług</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferujemy pełen zakres usług budowlanych, aby spełnić wszystkie Twoje potrzeby
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-gray-900" />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Spójrz na Nasze Najnowsze Projekty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Odkryj nasze portfolio udanych projektów
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <span className="text-yellow-400 text-sm mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-3 rounded hover:bg-yellow-500 transition-colors"
            >
              Zobacz Wszystkie Projekty <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Co Mówią o Nas Nasi Klienci</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Zacznij Budować z Pewnością Już Dziś
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Porozmawiajmy o Twoim kolejnym projekcie i wcielmy Twoją wizję w życie
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-3 rounded hover:bg-yellow-500 transition-colors"
          >
            Rozpocznij <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
