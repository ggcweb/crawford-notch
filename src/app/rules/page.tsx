import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

const generalRules = [
    "Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of your neighbors.",
    "Speed limit is 5 MPH throughout the campground.",
    "One camping unit, one vehicle per site. Additional vehicles require registration.",
    "All guests must register at the office upon arrival.",
    "Children must be supervised at all times.",
];

const prohibited = ["Firearms and weapons", "Fireworks", "Loud music or generators", "Outside firewood", "Illegal substances", "Clotheslines between trees", "Cutting or damaging trees", "Glass containers at river"];

export default function Rules() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Section variant="dark" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Guest Guidelines</p>
                    <h1 className="text-cream">Campground Rules</h1>
                    <p className="text-cream/80 text-lg mt-3">For the safety and enjoyment of all our guests</p>
                </Section>

                <Section variant="light">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="p-8 md:p-10">
                            <h2 className="text-bark-brown-dark border-b border-bark-brown/12 pb-5 mb-7">General Rules</h2>
                            <ul className="space-y-5 text-foreground list-none p-0">
                                {generalRules.map((rule, i) => (
                                    <li key={rule} className="flex items-start gap-4">
                                        <span className="bg-forest-green text-cream rounded-sm w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold font-display">{i + 1}</span>
                                        <span className="pt-0.5">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-8 md:p-10 border-t-2 border-t-rust relative overflow-hidden">
                            <Icon name="fire" className="absolute -top-4 -right-4 w-44 h-44 text-rust/5 pointer-events-none" />
                            <h2 className="text-rust-dark flex items-center gap-3 mb-7">
                                <Icon name="fire" className="w-8 h-8 text-rust" /> Fire Safety Rules
                            </h2>
                            <ul className="space-y-4 text-foreground list-none relative z-10 p-0">
                                <li className="flex items-start gap-3 p-4 bg-rust/8 rounded-sm border border-rust/20">
                                    <svg className="w-6 h-6 text-rust flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span className="font-semibold text-rust-dark">Campfires are only permitted in designated fire rings.</span>
                                </li>
                                {["Use only local firewood purchased from our store. Do not bring outside firewood (prevents spread of invasive pests).", "Never leave fires unattended. Fires must be completely extinguished before leaving or sleeping.", "Check for fire restrictions before building a fire. Restrictions may be in effect during dry conditions.", "Keep water or a fire extinguisher nearby when a fire is burning."].map((rule) => (
                                    <li key={rule} className="flex items-start gap-3 pl-3">
                                        <span className="w-1.5 h-1.5 bg-rust rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-8 md:p-10 border-t-2 border-t-forest-green">
                            <h2 className="text-forest-green flex items-center gap-3 mb-7">
                                <Icon name="water" className="w-8 h-8" /> River &amp; Nature Rules
                            </h2>
                            <ul className="space-y-3.5 text-foreground list-none p-0">
                                {["Swim at your own risk. No lifeguard on duty.", "Children must be supervised near the water at all times.", "Do not feed or approach wildlife.", "Keep food stored properly to avoid attracting bears and other wildlife.", "Leave No Trace — pack out all trash and respect nature."].map((rule) => (
                                    <li key={rule} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-forest-green rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="p-8 md:p-10 border-t-2 border-t-bark-brown-dark">
                            <h2 className="text-bark-brown-dark flex items-center gap-3 mb-7">
                                <Icon name="prohibited" className="w-7 h-7 text-deep-burgundy" /> Prohibited
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-foreground">
                                {prohibited.map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-2.5 rounded-sm">
                                        <svg className="w-5 h-5 text-deep-burgundy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="bg-bark-brown-dark text-cream p-9 rounded-sm text-center">
                            <h2 className="text-cream mb-5">Rule Enforcement</h2>
                            <p className="text-cream/90 max-w-2xl mx-auto">
                                Failure to comply with campground rules may result in eviction without refund. Management reserves the right to refuse service to anyone. Thank you for helping us maintain a safe and enjoyable environment for all guests.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
