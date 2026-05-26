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
        {/* Welcome / Reservation Status Section */}
        <Section className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Column - Welcome */}
            <div className="space-y-7 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-10 bg-forest-green"></span>
                <span className="text-forest-green text-base uppercase tracking-[0.2em] font-bold">Welcome</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-bark-brown-dark font-playfair leading-tight">
                Your Mountain Getaway Awaits
              </h2>
              <p className="text-xl text-foreground leading-relaxed">
                Crawford Notch Campground is a family-owned and operated campground nestled in the heart of the <strong>White Mountains of New Hampshire</strong>. Scenic Crawford Notch is well known for its awe-inspiring views, majestic mountains, unspoiled wilderness, and miles of hiking trails.
              </p>
              <p className="text-xl text-foreground leading-relaxed">
                Our wooded setting along the banks of the Saco River features secluded campsites and log cabins, offering the perfect escape from the hustle and bustle.
              </p>
              <div className="flex flex-row gap-4">
                  <div className="flex flex-wrap gap-5 pt-3 text-white">
                    {/* <Button href="/campground" variant="primary" size="lg">Explore the Campground</Button> */}
                    <Button href="/reservations" variant="primary" size="lg">Book Your Stay</Button>
                  </div>
                  <div className="flex flex-wrap gap-5 pt-3 text-white">
                    <Button href="/campground" variant="primary" size="lg">Explore the Campground</Button>
                    {/* <Button href="/reservations" variant="outline" size="lg">Book Your Stay</Button> */}
                  </div>
              </div>
              
            </div>

            {/* Right Column - Reservation Status */}
            <div className="animate-fade-in-up delay-200">
              <Card variant="default" className="bg-forest-green p-10 md:p-12 text-center shadow-2xl relative overflow-hidden border-none">
                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-base font-bold tracking-wide">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                    Now Accepting Reservations
                  </div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                    We are open for 2025 reservations!
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Please be aware that we require face masks in all buildings (bathhouse and store).
                  </p>
                  <div className="bg-white/15 p-5 rounded-xl backdrop-blur-sm">
                    <p className="text-base leading-relaxed">
                      Full payment over the phone is due the week before you come. We&apos;ll verify your info, get signatures, give you your key card, and getting you on your way!
                    </p>
                  </div>
                  <p className="text-2xl italic font-playfair pt-2">Stay healthy!</p>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Fire Safety Alert - Compact Banner */}
        <div className="bg-gradient-to-r from-red-800 to-red-700">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
            <div className="flex items-center gap-5">
              <span className="text-3xl flex-shrink-0">🔥</span>
              <div className="flex-1">
                <span className="font-bold text-lg" style={{ color: '#ffffff' }}>Fire Restrictions Notice:</span>{' '}
                <span style={{ color: '#ffffff' }} className="text-lg">White Mountain National Forest Fire Restrictions may be in place. Check with the USDA and WMNF website for current restrictions before your visit.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Highlights */}
        <Section variant="dark" className="relative">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-12">
              <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">What makes us special</p>
              <h2 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-playfair font-bold">
                Nestled in the Heart of The White Mountains
              </h2>
              <p style={{ color: '#ffffff' }} className="text-2xl mt-4 font-lora italic">
                Along the banks of the Saco River
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-7">
              {[
                { icon: "🌲", label: "100 Acres" },
                { icon: "⛺", label: "100 Sites" },
                { icon: "🏠", label: "Cabins & Yurts" },
                { icon: "🍂", label: "Natural Setting" },
                { icon: "🏔️", label: "Epic Views" },
                { icon: "🐾", label: "Pet Friendly" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white/[0.08] rounded-2xl hover:bg-white/[0.15] transition-all duration-300 backdrop-blur-sm group cursor-default">
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <span style={{ color: '#ffffff' }} className="font-bold text-base md:text-lg">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Activities Section */}
        <Section variant="light">
          <div className="text-center mb-14">
            <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">Things to do</p>
            <h2 className="text-4xl md:text-5xl text-bark-brown-dark font-playfair mb-5">We Offer</h2>
            <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { icon: "🥾", title: "Hiking", desc: "Miles of scenic trails" },
              { icon: "🚴", title: "Biking", desc: "Explore on two wheels" },
              { icon: "🏊", title: "River Wading", desc: "Cool off in the Saco" },
              { icon: "🗺️", title: "Attractions", desc: "Close to area hotspots" },
              { icon: "🛣️", title: "Scenic Byway", desc: "Route 302 Tour" },
              { icon: "📵", title: "Digital Detox", desc: "Disconnect to reconnect" },
            ].map((item, i) => (
              <Card key={i} className="flex items-center gap-6 p-7 bg-white hover:border-forest-green/30 border border-transparent transition-all group">
                <div className="w-16 h-16 flex items-center justify-center bg-forest-green/10 rounded-xl text-3xl flex-shrink-0 group-hover:bg-forest-green/20 transition-colors">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-bark-brown-dark">{item.title}</h3>
                  <p className="text-base text-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-14 text-center text-white">
            <Button href="/activities" variant="primary" size="lg">View All Activities</Button>
          </div>
        </Section>

        {/* CTA Blocks */}
        <div className="grid md:grid-cols-3">
          <Link href="/campground-map" className="group relative h-80 md:h-96 overflow-hidden flex items-center justify-center bg-deep-burgundy">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500 z-10" />
            <div className="relative z-20 text-center p-8">
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform duration-500">🗺️</span>
              <h3 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-playfair font-bold mb-3">Campsite Map</h3>
              <p style={{ color: '#ffffff' }} className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-lg tracking-wide">Explore our interactive layout →</p>
            </div>
          </Link>

          <Link href="/rates" className="group relative h-80 md:h-96 overflow-hidden flex items-center justify-center bg-bark-brown">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500 z-10" />
            <div className="relative z-20 text-center p-8">
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform duration-500">💲</span>
              <h3 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-playfair font-bold mb-3">Rates & Specials</h3>
              <p style={{ color: '#ffffff' }} className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-lg tracking-wide">View our competitive pricing →</p>
            </div>
          </Link>

          <Link href="/reservations" className="group relative h-80 md:h-96 overflow-hidden flex items-center justify-center bg-forest-green">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500 z-10" />
            <div className="relative z-20 text-center p-8">
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform duration-500">📅</span>
              <h3 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-playfair font-bold mb-3">Book Now</h3>
              <p style={{ color: '#ffffff' }} className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-lg tracking-wide">Start your adventure today →</p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
