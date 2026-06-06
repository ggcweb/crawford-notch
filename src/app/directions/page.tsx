import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

const routes = [
    { from: "From Boston, MA", time: "2.5 hours", steps: ["Take I-93 North to Exit 35 (Route 3)", "Follow Route 3 North through Franconia Notch", "Turn right onto Route 302 East", "Continue on Route 302 through Twin Mountain", "Campground is on the right in Crawford Notch"] },
    { from: "From Portland, ME", time: "2 hours", steps: ["Take Route 302 West from Portland", "Continue through North Conway", "Continue on Route 302 West through Bartlett", "Campground is on the left in Crawford Notch"] },
    { from: "From Montreal, QC", time: "3.5 hours", steps: ["Take I-89 South to I-93 South", "Take Exit 35 for Route 3", "Follow Route 3 North through Franconia Notch", "Turn right onto Route 302 East", "Campground is on the right in Crawford Notch"] },
    { from: "From North Conway, NH", time: "15 min", steps: ["Take Route 302 West", "Pass through Bartlett", "Continue into Crawford Notch", "Campground is on the left"] },
];

export const metadata: Metadata = {
    title: "Directions",
    description: "Directions to Crawford Notch General Store & Campground at 1777 Route 302, Hart's Location, NH, in the heart of the White Mountains.",
};

export default function Directions() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Getting Here</p>
                    <h1 className="text-cream">Directions</h1>
                    <p className="text-cream/85 text-lg mt-3">Find your way to Crawford Notch</p>
                </Section>

                <Section variant="default">
                    <div className="max-w-5xl mx-auto space-y-10">
                        <div className="text-center">
                            <Card className="inline-block p-9 md:p-10">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <Icon name="pin" className="w-6 h-6 text-forest-green" />
                                    <h2 className="text-bark-brown-dark text-2xl">Our Address</h2>
                                </div>
                                <div className="space-y-1.5 text-lg text-foreground">
                                    <p className="font-semibold">Crawford Notch General Store &amp; Campground</p>
                                    <p>1777 Route 302</p>
                                    <p>Hart&apos;s Location, NH 03812</p>
                                    <a href="tel:6033742779" className="text-rust hover:text-rust-dark font-semibold font-display block mt-4 text-2xl">(603) 374-2779</a>
                                </div>
                            </Card>
                        </div>

                        <Card className="p-2 overflow-hidden h-[460px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.8574741697386!2d-71.40!3d44.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb39e0e8c0d9a47%3A0x9d7d9c1d9c1d9c1d!2sCrawford%20Notch%20General%20Store%20%26%20Campground!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-sm"
                                title="Google Map"
                            />
                        </Card>
                    </div>
                </Section>

                <Section variant="dark">
                    <div className="text-center mb-14">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Route Options</p>
                        <h2 className="text-cream">Driving Directions</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-7">
                        {routes.map((route) => (
                            <Card key={route.from} variant="inset" className="p-8">
                                <div className="flex justify-between items-baseline mb-5 border-b border-cream/15 pb-4">
                                    <h3 className="text-cream">{route.from}</h3>
                                    <span className="text-sm bg-rust text-cream px-3 py-1 rounded-sm tracking-wide font-medium">{route.time}</span>
                                </div>
                                <ol className="list-decimal pl-5 space-y-2.5 text-cream/90">
                                    {route.steps.map((step) => (
                                        <li key={step}>{step}</li>
                                    ))}
                                </ol>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section variant="light">
                    <div className="grid md:grid-cols-2 gap-7">
                        <Card className="border-l-2 border-l-forest-green">
                            <h3 className="text-bark-brown-dark flex items-center gap-3 mb-5">
                                <Icon name="compass" className="w-7 h-7 text-forest-green" />
                                GPS &amp; Connectivity
                            </h3>
                            <p className="text-foreground mb-5">Enter <strong>1777 Route 302, Hart&apos;s Location, NH 03812</strong> into your GPS.</p>
                            <div className="bg-deep-burgundy/6 p-5 rounded-sm flex items-start gap-3 border border-deep-burgundy/15">
                                <svg className="w-6 h-6 text-deep-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <p className="text-deep-burgundy text-[0.95rem] font-medium">
                                    Cell service ends approx. 4 miles before the campground. Download offline maps and call us before entering the notch if needed: <a href="tel:6033742779" className="underline font-semibold">(603) 374-2779</a>
                                </p>
                            </div>
                        </Card>

                        <Card className="bg-forest-green border-forest-green-dark flex flex-col justify-center text-center p-9">
                            <Icon name="road" className="w-12 h-12 mx-auto text-ochre mb-5" />
                            <h3 className="text-cream mb-4">Scenic Byway</h3>
                            <p className="text-cream/90">
                                We are located along Route 302, part of the <strong>Presidential Range Tour National Scenic Byway</strong>. Enjoy the breathtaking mountain views as you travel to us.
                            </p>
                        </Card>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
