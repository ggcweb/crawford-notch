import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Rules() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="dark" className="py-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                            Campground Rules
                        </h1>
                        <p className="opacity-90 text-xl font-light">For the safety and enjoyment of all our guests</p>
                    </div>
                </Section>

                {/* Rules Content */}
                <Section variant="default" className="bg-tan-beige-light">
                    <div className="max-w-4xl mx-auto space-y-10">
                        {/* General Rules */}
                        <Card className="bg-white p-8 md:p-10 shadow-xl">
                            <h2 className="text-3xl text-bark-brown-dark font-playfair mb-8 border-b border-tan-beige pb-4">
                                General Rules
                            </h2>
                            <ul className="space-y-6 text-bark-brown-dark list-none">
                                {[
                                    "Quiet hours are from 10:00 PM to 8:00 AM. Please be respectful of your neighbors.",
                                    "Speed limit is 5 MPH throughout the campground.",
                                    "One camping unit, one vehicle per site. Additional vehicles require registration.",
                                    "All guests must register at the office upon arrival.",
                                    "Children must be supervised at all times."
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="bg-forest-green text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold shadow-sm">{i + 1}</span>
                                        <span className="text-lg pt-1">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Fire Safety */}
                        <Card className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-red-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-red-900 text-9xl pointer-events-none">🔥</div>
                            <h2 className="text-3xl text-red-800 font-playfair mb-8">
                                Fire Safety Rules
                            </h2>
                            <ul className="space-y-4 text-bark-brown-dark list-none text-lg relative z-10">
                                <li className="flex items-start gap-3 p-3 bg-red-50 rounded border border-red-100">
                                    <span className="text-red-600 font-bold text-xl">⚠️</span>
                                    <span className="font-bold text-red-900">Campfires are only permitted in designated fire rings.</span>
                                </li>
                                {[
                                    "Use only local firewood purchased from our store. DO NOT bring outside firewood (prevents spread of invasive pests).",
                                    "Never leave fires unattended. Fires must be completely extinguished before leaving or sleeping.",
                                    "Check for fire restrictions before building a fire. Restrictions may be in effect during dry conditions.",
                                    "Keep water or fire extinguisher nearby when fire is burning."
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3 pl-3">
                                        <span className="text-red-700">•</span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* River & Nature */}
                        <Card className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-blue-600">
                            <h2 className="text-3xl text-blue-900 font-playfair mb-8">
                                🌊 River &amp; Nature Rules
                            </h2>
                            <ul className="space-y-4 text-bark-brown-dark list-none text-lg">
                                {[
                                    "Swim at your own risk. No lifeguard on duty.",
                                    "Children must be supervised near the water at all times.",
                                    "Do not feed or approach wildlife.",
                                    "Keep food stored properly to avoid attracting bears and other wildlife.",
                                    "Leave No Trace - pack out all trash and respect nature."
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-600 text-xl font-bold">~</span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        {/* Prohibited Items */}
                        <Card className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-gray-800">
                            <h2 className="text-3xl text-bark-brown-dark font-playfair mb-8">
                                🚫 Prohibited
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-bark-brown-dark text-lg">
                                {[
                                    "Firearms and weapons",
                                    "Fireworks",
                                    "Loud music or generators",
                                    "Outside firewood",
                                    "Illegal substances",
                                    "Clotheslines between trees",
                                    "Cutting or damaging trees",
                                    "Glass containers at river"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 hover:bg-red-50 rounded transition-colors">
                                        <span className="text-red-600 font-bold">✕</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Enforcement */}
                        <div className="bg-bark-brown text-white p-8 rounded-lg text-center shadow-inner">
                            <h2 style={{ color: "white" }} className="text-2xl font-playfair mb-4">Rule Enforcement</h2>
                            <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
                                Failure to comply with campground rules may result in eviction without refund.
                                Management reserves the right to refuse service to anyone.
                                Thank you for helping us maintain a safe and enjoyable environment for all guests.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
