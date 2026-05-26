import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Directions() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Getting Here</p>
                        <h1 style={{ color: '#fff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">Directions</h1>
                        <p style={{ color: '#fff' }} className="text-xl">Find your way to Crawford Notch</p>
                    </div>
                </Section>

                <Section variant="default">
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center">
                            <Card className="inline-block p-10 md:p-12 bg-white shadow-xl">
                                <div className="flex items-center justify-center gap-3 mb-5">
                                    <svg className="w-6 h-6 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <h2 className="text-3xl text-bark-brown-dark font-playfair font-bold">Our Address</h2>
                                </div>
                                <div className="space-y-2 text-xl text-foreground">
                                    <p className="font-bold">Crawford Notch General Store &amp; Campground</p>
                                    <p>1777 Route 302</p>
                                    <p>Hart&apos;s Location, NH 03812</p>
                                    <a href="tel:6033742779" className="text-forest-green hover:underline font-bold block mt-5 text-2xl">(603) 374-2779</a>
                                </div>
                            </Card>
                        </div>

                        <Card className="p-2 bg-white shadow-xl overflow-hidden h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8574741697386!2d-71.40!3d44.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb39e0e8c0d9a47%3A0x9d7d9c1d9c1d9c1d!2sCrawford%20Notch%20General%20Store%20%26%20Campground!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                                title="Google Map"
                            />
                        </Card>
                    </div>
                </Section>

                <Section variant="dark" className="relative">
                    <div className="text-center mb-14">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Route Options</p>
                        <h2 style={{ color: '#fff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">Driving Directions</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { from: "From Boston, MA", time: "2.5 hours", steps: ["Take I-93 North to Exit 35 (Route 3)","Follow Route 3 North through Franconia Notch","Turn right onto Route 302 East","Continue on Route 302 through Twin Mountain","Campground is on the right in Crawford Notch"] },
                            { from: "From Portland, ME", time: "2 hours", steps: ["Take Route 302 West from Portland","Continue through North Conway","Continue on Route 302 West through Bartlett","Campground is on the left in Crawford Notch"] },
                            { from: "From Montreal, QC", time: "3.5 hours", steps: ["Take I-89 South to I-93 South","Take Exit 35 for Route 3","Follow Route 3 North through Franconia Notch","Turn right onto Route 302 East","Campground is on the right in Crawford Notch"] },
                            { from: "From North Conway, NH", time: "15 min", steps: ["Take Route 302 West","Pass through Bartlett","Continue into Crawford Notch","Campground is on the left"] }
                        ].map((route, i) => (
                            <Card key={i} className="bg-white/[0.10] backdrop-blur-sm border-none p-8 md:p-9 hover:bg-white/[0.16] transition-all duration-300">
                                <div className="flex justify-between items-baseline mb-6 border-b border-white/20 pb-4">
                                    <h3 style={{ color: '#fff' }} className="text-2xl font-bold">{route.from}</h3>
                                    <span className="text-sm bg-forest-green px-4 py-1.5 rounded-full tracking-wide font-bold" style={{ color: '#fff' }}>{route.time}</span>
                                </div>
                                <ol className="list-decimal pl-6 space-y-3 text-lg" style={{ color: '#fff' }}>
                                    {route.steps.map((step, j) => (
                                        <li key={j}>{step}</li>
                                    ))}
                                </ol>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section variant="light">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white border-l-4 border-forest-green p-9">
                            <h3 className="text-2xl font-playfair font-bold text-bark-brown-dark mb-5 flex items-center gap-3">
                                <svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                GPS &amp; Connectivity
                            </h3>
                            <p className="text-foreground mb-5 text-lg">Enter <strong>1777 Route 302, Hart&apos;s Location, NH 03812</strong> into your GPS.</p>
                            <div className="bg-deep-burgundy/8 p-5 rounded-lg flex items-start gap-3 border border-deep-burgundy/15">
                                <svg className="w-6 h-6 text-deep-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <p className="text-deep-burgundy text-base font-semibold">
                                    Cell service ends approx. 4 miles before the campground. Download offline maps and call us before entering the notch if needed: <a href="tel:6033742779" className="underline font-bold">(603) 374-2779</a>
                                </p>
                            </div>
                        </Card>

                        <Card className="bg-forest-green p-9 flex flex-col justify-center text-center border-none">
                            <div className="text-6xl mb-5">🛣️</div>
                            <h3 style={{ color: '#fff' }} className="text-3xl font-playfair mb-5 font-bold">Scenic Byway</h3>
                            <p style={{ color: '#fff' }} className="text-xl leading-relaxed">
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
