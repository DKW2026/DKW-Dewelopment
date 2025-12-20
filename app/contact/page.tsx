'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Dziękujemy! Wkrótce się z Tobą skontaktujemy.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Odwiedź Nas',
      details: ['ul. Budowlana 123', 'Warszawa 00-001'],
    },
    {
      icon: Phone,
      title: 'Zadzwoń',
      details: ['+48 555 123 456', '+48 555 987 654'],
    },
    {
      icon: Mail,
      title: 'Napisz do Nas',
      details: ['info@buildnext.pl', 'wsparcie@buildnext.pl'],
    },
    {
      icon: Clock,
      title: 'Godziny Pracy',
      details: ['Pon - Pt: 8:00 - 18:00', 'Sob: 9:00 - 14:00'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Skontaktuj się z Nami</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gotowy do rozpoczęcia projektu budowlanego? Skontaktuj się z nami już dziś i porozmawiajmy o tym,
            jak możemy pomóc wcielić Twoją wizję w życie
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={28} className="text-gray-900" />
                </div>
                <h3 className="text-lg mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl mb-6">Wyślij Nam Wiadomość</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Imię i Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Adres Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Numer Telefonu
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                      placeholder="+48 555 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700">
                    Rodzaj Projektu *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                  >
                    <option value="">Wybierz rodzaj projektu</option>
                    <option value="commercial">Budownictwo Komercyjne</option>
                    <option value="residential">Budownictwo Mieszkaniowe</option>
                    <option value="renovation">Usługi Remontowe</option>
                    <option value="infrastructure">Infrastruktura</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none resize-none"
                    placeholder="Opowiedz nam o swoim projekcie..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Wyślij Wiadomość
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Dlaczego Warto się z Nami Skontaktować?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Darmowa Konsultacja</h3>
                      <p className="text-gray-600">
                        Uzyskaj profesjonalną poradę i wycenę projektu bez żadnych kosztów
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Szybka Odpowiedź</h3>
                      <p className="text-gray-600">Zazwyczaj odpowiadamy w ciągu 24 godzin</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Przejrzyste Ceny</h3>
                      <p className="text-gray-600">Jasne, szczegółowe wyceny bez ukrytych opłat</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Doświadczony Zespół</h3>
                      <p className="text-gray-600">
                        Pracuj z ekspertami branżowymi o udokumentowanych osiągnięciach
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Lokalizacja na Mapie</p>
                  <p className="text-sm">ul. Budowlana 123, Warszawa 00-001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Często Zadawane Pytania</h2>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Jak długo trwa typowy projekt?</h3>
              <p className="text-gray-600">
                Terminy projektów różnią się w zależności od zakresu i złożoności. Projekty mieszkaniowe
                zazwyczaj trwają 3-6 miesięcy, podczas gdy projekty komercyjne mogą trwać 6-18 miesięcy.
                Szczegółowe harmonogramy przedstawiamy podczas konsultacji.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Czy oferujecie opcje finansowania projektów?</h3>
              <p className="text-gray-600">
                Tak, współpracujemy z kilkoma partnerami finansowymi, aby pomóc uczynić Twój projekt
                przystępnym cenowo. Skontaktuj się z nami, aby omówić dostępne opcje finansowania.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl mb-2">Czy posiadacie licencje i ubezpieczenie?</h3>
              <p className="text-gray-600">
                Oczywiście. Jesteśmy w pełni licencjonowani, kaucjonowani i ubezpieczeni. Możemy
                dostarczyć kopie naszych dokumentów na żądanie.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Jakie obszary obsługujecie?</h3>
              <p className="text-gray-600">
                Głównie obsługujemy Warszawę i okolice, ale jesteśmy otwarci na omówienie
                projektów w innych lokalizacjach indywidualnie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
