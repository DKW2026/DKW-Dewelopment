'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Nowoczesny Kompleks Biurowy',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1714601344981-75e003bc5d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzfGVufDF8fHx8MTc2NjIzMjkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Najnowocześniejszy budynek biurowy z nowoczesnymi udogodnieniami',
      location: 'Warszawa',
      year: '2024',
    },
    {
      id: 2,
      title: 'Luksusowa Willa Mieszkalna',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYyMzI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Elegancka nowoczesna willa z panoramicznymi widokami',
      location: 'Kraków',
      year: '2024',
    },
    {
      id: 3,
      title: 'Budynek Komercyjny',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1764983266679-751a8bbb54d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjYxNTY3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Wielofunkcyjna przestrzeń komercyjna w doskonałej lokalizacji',
      location: 'Wrocław',
      year: '2023',
    },
    {
      id: 4,
      title: 'Nowoczesna Architektura',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYxMzkzODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Współczesny projekt z innowacyjnymi rozwiązaniami',
      location: 'Gdańsk',
      year: '2023',
    },
    {
      id: 5,
      title: 'Budownictwo Mieszkaniowe',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1715231667593-5a32b2828546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjE3NzQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Nowa inwestycja mieszkaniowa',
      location: 'Poznań',
      year: '2024',
    },
    {
      id: 6,
      title: 'Plac Budowy',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1757163565776-d0f3beac79bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2NjIzMjkxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Wielkoskalowy rozwój infrastruktury',
      location: 'Łódź',
      year: '2023',
    },
  ];

  const categories = [
    { id: 'all', label: 'Wszystkie Projekty' },
    { id: 'commercial', label: 'Komercyjne' },
    { id: 'residential', label: 'Mieszkaniowe' },
    { id: 'infrastructure', label: 'Infrastruktura' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded transition-colors font-medium ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary uppercase font-semibold">
                      {project.category === 'commercial' ? 'Komercyjne' : project.category === 'residential' ? 'Mieszkaniowe' : 'Infrastruktura'}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Od Koncepcji do Realizacji</h2>
          <p className="text-xl text-muted-foreground mb-8">
            To są nasze osiągnięcia. Pozwól nam pomóc wcielić Twoją wizję w życie dzięki naszej wiedzy
            i zaangażowaniu.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded hover:bg-primary/90 transition-colors font-medium"
          >
            Rozpocznij Swój Projekt
          </Link>
        </div>
      </section>
    </div>
  );
}
