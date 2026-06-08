import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

export const metadata: Metadata = {
    title: "Policies",
    description: "Reservation, payment, cancellation, and campground policies for Crawford Notch Campground in New Hampshire. Plan your White Mountains stay with confidence.",
};

export default function Policies() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Section variant="burgundy" className="py-20 md:py-24">
                    <div className="text-center">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Guest Information</p>
                        <h1 className="text-cream">Campground Policies</h1>
                        <div className="h-px w-12 bg-ochre mx-auto mt-6" />
                    </div>
                </Section>

                <Section variant="light">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="bg-deep-burgundy text-cream p-8 md:p-10 rounded-sm border-l-4 border-l-ochre">
                            <div className="flex items-start gap-4">
                                <svg className="w-8 h-8 text-ochre flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                <div>
                                    <h2 className="text-cream mb-3">Gate Hours</h2>
                                    <p className="text-cream/90 text-lg">
                                        The gate is <span className="font-semibold text-ochre">closed and locked from 10:00 PM to 8:00 AM</span>. During these hours no one can get in, but you can always get out.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="p-8 md:p-10 border-t-2 border-t-forest-green">
                            <h2 className="text-bark-brown-dark mb-6">Reservation Policy</h2>
                            <ul className="space-y-4 text-foreground list-none p-0">
                                {["Full payment is due as soon as you book.", "Reservations may be made by phone or through our online booking system.", "We accept cash and major credit cards. No personal checks."].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-forest-green-light flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-8 md:p-10 border-t-2 border-t-deep-burgundy">
                            <h2 className="text-deep-burgundy mb-6">Cancellation Policy</h2>
                            <ul className="space-y-3 text-foreground list-none p-0">
                                {[{ p: "Outside of 30 days:", d: "50% refund." }, { p: "Within 30 days:", d: "No refund." }].map((item) => (
                                    <li key={item.p} className="flex flex-col md:flex-row md:items-center gap-2 p-4 bg-tan-beige-light/70 rounded-sm">
                                        <span className="font-semibold text-deep-burgundy min-w-[180px]">{item.p}</span>
                                        <span>{item.d}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-7">
                            <Card className="border-l-2 border-l-forest-green">
                                <h2 className="text-bark-brown-dark text-2xl mb-5">Check-in</h2>
                                <div className="space-y-3 mb-5">
                                    {[["Cabin check-in:", "3:00 PM"], ["Site check-in:", "1:00 PM"], ["Office hours:", "8am – 8pm"]].map(([k, v]) => (
                                        <div key={k} className="flex justify-between items-baseline">
                                            <span className="text-foreground font-medium">{k}</span>
                                            <span className="text-2xl font-semibold text-forest-green font-display">{v}</span>
                                        </div>
                                    ))}
                                </div>
                                <ul className="space-y-3 list-none p-0 text-foreground">
                                    {["Please check in at the General Store", "Late arrivals should call ahead"].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-forest-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                            <Card className="border-l-2 border-l-bark-brown">
                                <h2 className="text-bark-brown-dark text-2xl mb-5">Check-out</h2>
                                <div className="text-4xl font-semibold text-forest-green font-display mb-5">11:00 AM</div>
                                <ul className="space-y-3 list-none p-0 text-foreground">
                                    {["Please leave your site clean", "Return key cards to the office"].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-bark-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                        <Card className="p-8 md:p-10">
                            <h2 className="text-bark-brown-dark mb-6">Guest &amp; Visitor Policy</h2>
                            <ul className="space-y-3.5 text-foreground list-none p-0">
                                {["All guests must be registered at check-in.", "Day visitors must register at the office and leave by 9:00 PM.", "Maximum 6 people per campsite (varies for cabins).", "Children under 18 must be accompanied by an adult."].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-forest-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-8 md:p-10 border-t-2 border-t-bark-brown">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 flex items-center justify-center bg-forest-green-light text-forest-green rounded-sm flex-shrink-0">
                                    <Icon name="paw" className="w-7 h-7" />
                                </span>
                                <h2 className="text-bark-brown-dark">Pet Policy</h2>
                            </div>
                            <ul className="space-y-3.5 text-foreground list-none p-0">
                                {["Pets are welcome at most campsites (some restrictions apply).", "Pets must be on a leash (6 feet or less) at all times.", "Owners must clean up after their pets immediately.", "Pets may not be left unattended."].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-forest-green rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
