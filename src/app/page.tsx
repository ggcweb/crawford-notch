"use client";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';
import { BOOKING_URL } from '@/lib/booking';

const highlights: { icon: IconName; label: string }[] = [
  { icon: "pine", label: "100 Acres" },
  { icon: "tent", label: "100 Sites" },
  { icon: "cabin", label: "Cabins & Yurts" },
  { icon: "leaf", label: "Natural Setting" },
  { icon: "mountain", label: "Epic Views" },
  { icon: "paw", label: "Pet Friendly" },
];

const activities: { icon: IconName; title: string; desc: string }[] = [
  { icon: "boot", title: "Hiking", desc: "Miles of scenic trails" },
  { icon: "bike", title: "Biking", desc: "Explore on two wheels" },
  { icon: "water", title: "River Wading", desc: "Cool off in the Saco" },
  { icon: "compass", title: "Attractions", desc: "Close to area hotspots" },
  { icon: "road", title: "Scenic Byway", desc: "The Route 302 tour" },
  { icon: "no-signal", title: "Digital Detox", desc: "Disconnect to reconnect" },
];

const ctas: { href: string; icon: IconName; title: string; desc: string; bg: string; external?: boolean }[] = [
  { href: "/campground-map", icon: "map", title: "Campsite Map", desc: "Explore our interactive layout", bg: "bg-deep-burgundy" },
  { href: "/rates", icon: "tag", title: "Rates & Reservations", desc: "Payment & booking info", bg: "bg-bark-brown" },
  { href: BOOKING_URL, icon: "calendar", title: "Book Now", desc: "Start your adventure today", bg: "bg-forest-green", external: true },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Campground',
    name: 'Crawford Notch General Store & Campground',
    image: 'https://crawfordnotchcamping.com/image.jpg',
    description: 'Family-owned campground in the heart of the White Mountains, NH. Offering campsites, cabins, and yurts along the Saco River.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1138 US Route 302',
      addressLocality: "Hart's Location",
      addressRegion: 'NH',
      postalCode: '03812',
      addressCountry: 'US',
    },
    url: 'https://crawfordnotchcamping.com',
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
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Welcome / reservation status */}
        <Section className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-rust text-sm uppercase tracking-[0.2em] font-semibold rule-accent">Welcome</p>
              <h2 className="text-bark-brown-dark">
                Your mountain getaway awaits
              </h2>
              <p className="text-lg text-foreground">
                Crawford Notch Campground is a family-owned and operated campground nestled in the heart of the <strong>White Mountains of New Hampshire</strong>. Scenic Crawford Notch is well known for its awe-inspiring views, majestic mountains, unspoiled wilderness, and miles of hiking trails.
              </p>
              <p className="text-lg text-foreground">
                Our wooded setting along the banks of the Saco River features secluded campsites and log cabins &mdash; the perfect escape from the hustle and bustle.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">Book Your Stay</Button>
                <Button href="/campground" variant="outline" size="lg">Explore the Campground</Button>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <Card className="bg-forest-green text-cream border-forest-green-dark p-9 md:p-10">
                <div className="inline-flex items-center gap-2 border border-cream/30 px-4 py-1.5 rounded-sm text-sm font-medium tracking-wide">
                  <span className="w-2 h-2 bg-ochre rounded-full" />
                  Now accepting reservations
                </div>
                <h3 className="text-cream mt-6 mb-4">
                  We&apos;re open for the 2026 season
                </h3>
                <p className="text-cream/90 mb-5">
                  Reserve early for the best selection of riverside sites and cabins &mdash; summer and foliage weekends fill up fast.
                </p>
                <div className="bg-bark-brown-dark/25 border border-cream/15 p-5 rounded-sm">
                  <p className="text-cream/90 text-[0.95rem]">
                    Full payment is due as soon as you book. When you arrive, we&apos;ll verify your info, collect signatures, hand over your key card, and get you on your way.
                  </p>
                </div>
                <p className="text-xl italic font-display text-ochre mt-6">See you on the river!</p>
              </Card>
            </div>
          </div>
        </Section>

        {/* Fire safety alert */}
        <div className="bg-rust-dark text-cream">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5">
            <div className="flex items-center gap-4">
              <Icon name="fire" className="w-8 h-8 flex-shrink-0 text-ochre" />
              <p className="text-[0.95rem] md:text-base">
                <span className="font-semibold">Fire restrictions notice:</span>{' '}
                White Mountain National Forest fire restrictions may be in place. Check the USDA and WMNF website for current restrictions before your visit.
              </p>
            </div>
          </div>
        </div>

        {/* Property highlights */}
        <Section variant="dark">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold rule-accent rule-accent-center">What makes us special</p>
            <h2 className="text-cream">
              Nestled in the heart of the White Mountains
            </h2>
            <p className="text-cream/80 text-xl mt-3 font-display italic">
              Along the banks of the Saco River
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {highlights.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center p-6 border border-cream/12 rounded-sm hover:border-ochre/50 transition-colors">
                <Icon name={feature.icon} className="w-9 h-9 mb-3 text-ochre" />
                <span className="text-cream font-medium text-[0.95rem]">{feature.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Activities */}
        <Section variant="light">
          <div className="text-center mb-14">
            <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold rule-accent rule-accent-center">Things to do</p>
            <h2 className="text-bark-brown-dark">What we offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((item) => (
              <Card key={item.title} className="flex items-center gap-5 hover:border-forest-green/40 transition-colors">
                <span className="w-14 h-14 flex items-center justify-center bg-forest-green-light text-forest-green rounded-sm flex-shrink-0">
                  <Icon name={item.icon} className="w-7 h-7" />
                </span>
                <div>
                  <h3 className="text-xl text-bark-brown-dark mb-0.5">{item.title}</h3>
                  <p className="text-muted text-[0.95rem]">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/activities" variant="primary" size="lg">View all activities</Button>
          </div>
        </Section>

        {/* CTA blocks */}
        <div className="grid md:grid-cols-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noopener noreferrer' : undefined}
              className={`group relative h-72 md:h-80 overflow-hidden flex flex-col items-center justify-center text-center p-8 ${cta.bg} text-cream`}
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-ochre scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <Icon name={cta.icon} className="w-12 h-12 mb-5 text-ochre transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="text-cream text-2xl md:text-3xl mb-2">{cta.title}</h3>
              <p className="text-cream/85">{cta.desc}</p>
              <span className="mt-4 text-ochre text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
