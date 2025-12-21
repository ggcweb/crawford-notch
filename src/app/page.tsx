"use client";
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Campground',
    name: 'Crawford Notch General Store & Campground',
    image: 'https://www.crawfordnotchcamping.com/images/og-image.jpg',
    description: 'Family-owned campground in the heart of the White Mountains, NH. Offering campsites, cabins, and yurts along the Saco River.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1777 Route 302',
      addressLocality: "Hart's Location",
      addressRegion: 'NH',
      postalCode: '03812',
      addressCountry: 'US',
    },
    url: 'https://www.crawfordnotchcamping.com',
    telephone: '+1-603-374-2779',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      }
    ],
    priceRange: '$$',
  };

  return (
    <div className="min-h-screen flex flex-col font-lora">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Welcome Section */}
        <Section className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Branding */}
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in-left">
              <div className="w-40 h-40 flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-bark-brown">
                  <path fill="currentColor" d="M50 10 L40 30 L45 30 L42 50 L35 50 L30 70 L40 70 L40 85 L45 90 L50 85 L55 90 L60 85 L60 70 L70 70 L65 50 L58 50 L55 30 L60 30 Z" />
                  <path fill="currentColor" d="M25 25 L15 15 L20 30 L30 25 Z M75 25 L85 15 L80 30 L70 25 Z" />
                  <circle cx="45" cy="40" r="3" fill="#fff" />
                  <circle cx="55" cy="40" r="3" fill="#fff" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl text-bark-brown-dark font-playfair mb-2">
                  Welcome to
                </h2>
                <h3 className="text-2xl md:text-3xl text-bark-brown font-playfair italic">
                  Crawford Notch Campground
                </h3>
              </div>
              <div className="h-1 w-20 bg-forest-green rounded-full mx-auto" />
            </div>

            {/* Right Column - Reservation Status */}
            <Card variant="default" className="bg-forest-green text-white p-8 md:p-12 text-center transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl relative overflow-hidden">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl mb-6 font-playfair">
                  We are open for 2025 reservations!
                </h2>
                <p className="text-lg text-bark-brown-dark leading-relaxed mb-4 opacity-90">
                  Please be aware that we require face masks in all buildings (bathhouse and store).
                </p>
                <div className="bg-white/10 p-4 text-bark-brown-dark rounded-lg backdrop-blur-sm mb-6">
                  <p className="text-base leading-relaxed">
                    Full payment over the phone is due the week before you come. We&apos;ll verify your info, get signatures, give you your key card, and getting you on your way!
                  </p>
                </div>
                <p className="text-xl italic font-serif text-bark-brown-dark">Stay healthy!</p>
              </div>
            </Card>
          </div>
        </Section>

        {/* Narrative & Fire Safety */}
        <Section variant="light">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-3xl text-bark-brown-dark font-playfair">
                Experience the White Mountains
              </h2>
              <p className="text-lg text-bark-brown-dark leading-relaxed">
                Crawford Notch Campground is a family-owned and operated campground nestled in the heart of the <strong>White Mountains of New Hampshire</strong>. Scenic Crawford Notch is well known for its awe-inspiring views, majestic mountains, unspoiled wilderness, and miles of hiking trails.
              </p>
              <p className="text-lg text-bark-brown-dark leading-relaxed">
                Our wooded setting along the banks of the Saco River features secluded campsites and log cabins, offering the perfect escape from the hustle and bustle.
              </p>
              <Button href="/campground" variant="outline">Explore the Campground</Button>
            </div>

            {/* Fire Restrictions Alert */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur opacity-25"></div>
              <Card className="relative bg-white border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔥</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-2">Fire Restrictions Notice</h3>
                    <p className="text-bark-brown-dark">
                      White Mountain National Forest Fire Restrictions may be in place. Please check with the USDA and WMNF website for current fire restrictions before your visit.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Features Grid (Modernized List) */}
        <Section variant="dark" className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 style={{ color: "white" }} className="text-3xl md:text-4xl mb-10 font-playfair">
              Nestled in the Heart of The White Mountains<br />
              <span className="text-2xl mt-2 block opacity-80 text-white font-lora italic">Along the banks of the Saco River</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: "🌲", label: "100 Acres" },
                { icon: "⛺", label: "100 Sites" },
                { icon: "🏠", label: "Cabins & Yurts" },
                { icon: "🍂", label: "Natural Setting" },
                { icon: "🏔️", label: "Epic Views" },
                { icon: "🐾", label: "Pet Friendly" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <span className="text-3xl mb-2">{feature.icon}</span>
                  <span className="text-tan-beige font-medium text-sm md:text-base">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Activities Highlights */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-bark-brown-dark font-playfair mb-4">We Offer</h2>
            <div className="h-1 w-24 bg-forest-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🥾", title: "Hiking", desc: "Miles of scenic trails" },
              { icon: "🚴", title: "Biking", desc: "Explore on two wheels" },
              { icon: "🏊", title: "River Wading", desc: "Cool off in the Saco" },
              { icon: "🗺️", title: "Attractions", desc: "Close to area hotspots" },
              { icon: "🛣️", title: "Scenic Byway", desc: "Route 302 Tour" },
              { icon: "📵", title: "Digital Detox", desc: "Disconnect to reconnect" },
            ].map((item, i) => (
              <Card key={i} className="flex items-center gap-4 p-6 hover:border-forest-green border border-transparent transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-tan-beige rounded-full text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-bark-brown-dark">{item.title}</h3>
                  <p className="text-sm text-bark-brown opacity-80">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center text-white">
            <Button href="/activities" variant="secondary">View All Activities</Button>
          </div>
        </Section>

        {/* CTA Blocks (Footer-ish) */}
        <div className="grid md:grid-cols-3">
          <Link href="/campground-map" style={{ color: "white" }} className="group relative h-80 overflow-hidden flex items-center justify-center bg-deep-burgundy text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            {/* Optional: Add image background here if available */}
            <div className="relative z-20 text-center p-6 transform transition-transform group-hover:scale-105">
              <h3 style={{ color: "white" }} className="text-3xl font-playfair mb-2">Campsite Map</h3>
              <p style={{ color: "white" }} className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">View our layout</p>
            </div>
          </Link>

          <Link href="/rates" style={{ color: "white" }} className="group relative h-80 overflow-hidden flex items-center justify-center bg-bark-brown text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="relative z-20 text-center p-6 transform transition-transform group-hover:scale-105">
              <h3 style={{ color: "white" }} className="text-3xl font-playfair mb-2">Rates & Specials</h3>
              <p style={{ color: "white" }} className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">Check availability</p>
            </div>
          </Link>

          <Link href="/reservations" style={{ color: "white" }} className="group relative h-80 overflow-hidden flex items-center justify-center bg-forest-green text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="relative z-20 text-center p-6 transform transition-transform group-hover:scale-105">
              <h3 style={{ color: "white" }} className="text-3xl font-playfair mb-2">Book Now</h3>
              <p style={{ color: "white" }} className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">Start your adventure</p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
