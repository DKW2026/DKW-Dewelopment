'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: '/', label: 'Strona Główna' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'O Nas' },
    { path: '/contact', label: 'Kontakt' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">DKW DEVELOPMENT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-foreground font-semibold'
                    : 'text-foreground hover:text-accent-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-primary px-6 py-2 rounded hover:brightness-90 transition-colors"
            >
              Wycena
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-accent-foreground font-semibold bg-muted'
                      : 'text-foreground hover:text-accent-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 bg-accent text-primary px-6 py-2 rounded text-center hover:brightness-90 transition-colors"
              >
                Wycena
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
