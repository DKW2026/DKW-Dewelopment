import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">C</span>
              </div>
              <span className="text-xl font-bold">DKW DEWELOPMENT</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Budujemy marzenia w rzeczywistość z doskonałością i innowacją od 2010 roku.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Budownictwo Komercyjne</li>
              <li>Budownictwo Mieszkaniowe</li>
              <li>Usługi Remontowe</li>
              <li>Zarządzanie Projektami</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-foreground mt-1 shrink-0" />
                <span className="text-primary-foreground/70">ul. Budowlana 123, Warszawa 00-001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-foreground shrink-0" />
                <span className="text-primary-foreground/70">+48 555 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-foreground shrink-0" />
                <span className="text-primary-foreground/70">info@buildnext.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} DKW DEWELOPMENT. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
