"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

// TODO: Sent mail to wroclaw.dkw@gmail.com
export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      title: "Budowa Magazynu i Pomieszczenia Logistycznego",
      category: "commercial",
      images: [
        "/konstrukcja-stalowa.webp",
        "/konstrukcja-stalowa-2.webp",
        "/konstrukcja-stalowa-3.webp",
        "/konstrukcja-stalowa-4.webp",
      ],
      description:
        "Budowa nowego magazynu i pomieszczenia logistycznego. Wykonanie konstrukcji stalowych pod regały systemowe, montaż instalacji elektrycznych pod zasilanie elementów automatyki.",
      location: "Barlinek, Województwo Zachodniopomorskie",
    },
    {
      id: 3,
      title: "Budynek Komercyjny",
      category: "commercial",
      images: ["/droga-1.webp", "/droga-2.webp"],
      description:
        "Przebudowa drogi między miejscowościami Wiry i Wirki w zakresie zmiany nawierzchni asfaltowej, budowy chodników oraz zagospodarowania terenu przyległego.",
      location: "Wiry, Województwo Dolnośląskie",
    },
    {
      id: 5,
      title: "Współczesny projekt z innowacyjnymi rozwiązaniami ",
      category: "commercial",
      images: [""],
      description:
        "Zabezpieczenie przeciwpowodziowe rzeki Iny, zabezpieczenie przeciwpowodziowe miasta Stargard",
      location: "Stargard, Województwo Zachodniopomorskie",
    },
    {
      id: 6,
      title: "Współczesny projekt z innowacyjnymi rozwiązaniami",
      category: "commercial",
      images: ["/chodnik-1.jpg", "/chodnik-2.webp", "/chodnik-3.webp"],
      description:
        "Rozbudowa i przebudowa oraz termomodernizacja żłobka miejskiego w Dzierźżoniowie.",
      location: "Dzierżoniów, Województwo Dolnośląskie",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setFullscreenImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <ImageWithFallback
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-64">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-64">
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div
                            className="h-64 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFullscreenImage(image);
                            }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary uppercase font-semibold">
                      {project.category === "commercial"
                        ? "Komercyjne"
                        : project.category === "residential"
                          ? "Mieszkaniowe"
                          : "Infrastruktura"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
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
          <h2 className="text-4xl font-bold mb-6">
            Od Koncepcji do Realizacji
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            To są nasze osiągnięcia. Pozwól nam pomóc wcielić Twoją wizję w
            życie dzięki naszej wiedzy i zaangażowaniu.
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
