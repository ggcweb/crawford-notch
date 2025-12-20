import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Directions() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20 text-center">
                    <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                        Directions
                    </h1>
                    <p className="opacity-90 text-xl font-light">Find your way to Crawford Notch</p>
                </Section>

                {/* Address & Map */}
                <Section variant="default">
                    <div className="max-w-6xl mx-auto space-y-12">
                        {/* Address Card */}
                        <div className="text-center">
                            <Card className="inline-block p-10 bg-white shadow-xl hover:-translate-y-1 transition-transform">
                                <h2 className="text-2xl text-bark-brown font-playfair mb-4">Our Address</h2>
                                <div className="space-y-2 text-lg text-bark-brown-dark">
                                    <p className="font-semibold">Crawford Notch General Store &amp; Campground</p>
                                    <p>1777 Route 302</p>
                                    <p>Hart&apos;s Location, NH 03812</p>
                                    <a href="tel:6033742779" className="text-forest-green hover:underline font-bold block mt-4 text-xl">
                                        (603) 374-2779
                                    </a>
                                </div>
                            </Card>
                        </div>

                        {/* Map */}
                        <Card className="p-2 bg-white shadow-lg overflow-hidden h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8574741697386!2d-71.40!3d44.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb39e0e8c0d9a47%3A0x9d7d9c1d9c1d9c1d!2sCrawford%20Notch%20General%20Store%20%26%20Campground!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded"
                                title="Google Map"
                            ></iframe>
                        </Card>
                    </div>
                </Section>

                {/* Driving Directions */}
                <Section variant="dark" className="relative">
                    <div className="text-center mb-12">
                        <h2 style={{ color: "white" }} className="text-3xl md:text-4xl font-playfair mb-4 text-tan-beige">
                            Driving Directions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                from: "From Boston, MA",
                                time: "2.5 hours",
                                steps: ["Take I-93 North to Exit 35 (Route 3)", "Follow Route 3 North through Franconia Notch", "Turn right onto Route 302 East", "Continue on Route 302 through Twin Mountain", "Campground is on the right in Crawford Notch"]
                            },
                            {
                                from: "From Portland, ME",
                                time: "2 hours",
                                steps: ["Take Route 302 West from Portland", "Continue through North Conway", "Continue on Route 302 West through Bartlett", "Campground is on the left in Crawford Notch"]
                            },
                            {
                                from: "From Montreal, QC",
                                time: "3.5 hours",
                                steps: ["Take I-89 South to I-93 South", "Take Exit 35 for Route 3", "Follow Route 3 North through Franconia Notch", "Turn right onto Route 302 East", "Campground is on the right in Crawford Notch"]
                            },
                            {
                                from: "From North Conway, NH",
                                time: "15 min",
                                steps: ["Take Route 302 West", "Pass through Bartlett", "Continue into Crawford Notch", "Campground is on the left"]
                            }
                        ].map((route, i) => (
                            <Card key={i} className="bg-white/10 text-white backdrop-blur-sm border-none p-6 md:p-8">
                                <div className="flex justify-between items-baseline mb-4 border-b border-white/20 pb-2">
                                    <h3 style={{ color: "white" }} className="text-xl font-bold">{route.from}</h3>
                                    <span className="text-sm opacity-80 bg-forest-green px-2 py-1 rounded">{route.time}</span>
                                </div>
                                <ol className="list-decimal pl-5 space-y-2 opacity-90 text-lg">
                                    {route.steps.map((step, j) => (
                                        <li key={j}>{step}</li>
                                    ))}
                                </ol>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* GPS & Scenic Byway */}
                <Section variant="light">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white border-l-8 border-forest-green p-8">
                            <h3 className="text-2xl font-playfair font-semibold text-bark-brown-dark mb-4 flex items-center gap-2">
                                <span className="text-3xl">📍</span> GPS &amp; Connectivity
                            </h3>
                            <p className="text-bark-brown-dark mb-4 text-lg">
                                Enter <strong>1777 Route 302, Hart&apos;s Location, NH 03812</strong> into your GPS.
                            </p>
                            <div className="bg-deep-burgundy/10 p-4 rounded text-deep-burgundy font-medium flex items-start gap-2">
                                <span className="text-xl">⚠️</span>
                                <p>
                                    Cell service ends approx. 4 miles before the campground. Download offline maps and call us before entering the notch if needed: <a href="tel:6033742779" className="underline font-bold">(603) 374-2779</a>
                                </p>
                            </div>
                        </Card>

                        <Card className="bg-forest-green text-white p-8 flex flex-col justify-center text-center">
                            <div className="text-5xl mb-4">🛣️</div>
                            <h3 className="text-2xl font-playfair mb-4">Scenic Byway</h3>
                            <p className="text-bark-brown text-lg opacity-90 leading-relaxed">
                                We are located along Route 302, part of the <strong>Presidential Range Tour National Scenic Byway</strong>. Enjoy the breathtaking mountain views as you travel to us!
                            </p>
                        </Card>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
