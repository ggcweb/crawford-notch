import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Rules() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />
            <main className="flex-1">
                <Section variant="dark" className="py-20 md:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Guest Guidelines</p>
                        <h1 style={{ color: '#fff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">Campground Rules</h1>
                        <p style={{ color: '#fff' }} className="text-xl">For the safety and enjoyment of all our guests</p>
                    </div>
                </Section>

                <Section variant="default" className="bg-cream">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <Card className="bg-white p-9 md:p-12">
                            <h2 className="text-3xl text-bark-brown-dark font-playfair mb-8 border-b border-tan-beige/50 pb-5 font-bold">General Rules</h2>
                            <ul className="space-y-6 text-foreground list-none p-0">
                                {["Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of your neighbors.","Speed limit is 5 MPH throughout the campground.","One camping unit, one vehicle per site. Additional vehicles require registration.","All guests must register at the office upon arrival.","Children must be supervised at all times."].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="bg-forest-green text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">{i + 1}</span>
                                        <span className="text-lg pt-1">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="bg-white p-9 md:p-12 border-t-4 border-red-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-red-900 text-9xl pointer-events-none select-none">🔥</div>
                            <h2 className="text-3xl text-red-800 font-playfair mb-8 font-bold">Fire Safety Rules</h2>
                            <ul className="space-y-5 text-foreground list-none text-lg relative z-10 p-0">
                                <li className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span className="font-bold text-red-900">Campfires are only permitted in designated fire rings.</span>
                                </li>
                                {["Use only local firewood purchased from our store. DO NOT bring outside firewood (prevents spread of invasive pests).","Never leave fires unattended. Fires must be completely extinguished before leaving or sleeping.","Check for fire restrictions before building a fire. Restrictions may be in effect during dry conditions.","Keep water or fire extinguisher nearby when fire is burning."].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3 pl-3">
                                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="bg-white p-9 md:p-12 border-t-4 border-blue-600">
                            <h2 className="text-3xl text-blue-900 font-playfair mb-8 flex items-center gap-3 font-bold">
                                <span className="text-4xl">🌊</span> River &amp; Nature Rules
                            </h2>
                            <ul className="space-y-4 text-foreground list-none text-lg p-0">
                                {["Swim at your own risk. No lifeguard on duty.","Children must be supervised near the water at all times.","Do not feed or approach wildlife.","Keep food stored properly to avoid attracting bears and other wildlife.","Leave No Trace - pack out all trash and respect nature."].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="bg-white p-9 md:p-12 border-t-4 border-gray-800">
                            <h2 className="text-3xl text-bark-brown-dark font-playfair mb-8 flex items-center gap-3 font-bold">
                                <span className="text-4xl">🚫</span> Prohibited
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-foreground text-lg">
                                {["Firearms and weapons","Fireworks","Loud music or generators","Outside firewood","Illegal substances","Clotheslines between trees","Cutting or damaging trees","Glass containers at river"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 hover:bg-red-50/50 rounded-lg transition-colors">
                                        <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="bg-bark-brown-dark p-9 rounded-xl text-center">
                            <h2 style={{ color: '#fff' }} className="text-3xl font-playfair mb-5 font-bold">Rule Enforcement</h2>
                            <p style={{ color: '#fff' }} className="max-w-2xl mx-auto leading-relaxed text-lg">
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
