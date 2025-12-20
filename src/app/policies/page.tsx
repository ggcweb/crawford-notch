import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Policies() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20 bg-deep-burgundy">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                            Campground Policies
                        </h1>
                        <div className="h-1 w-20 bg-white/50 mx-auto rounded-full" />
                    </div>
                </Section>

                {/* Policies Content */}
                <Section variant="default" className="bg-tan-beige-light">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Reservation Policy */}
                        <Card className="bg-white p-8 md:p-10 border-t-8 border-forest-green">
                            <h2 className="text-3xl font-playfair text-bark-brown-dark mb-6">Reservation Policy</h2>
                            <ul className="space-y-4 text-bark-brown-dark list-none text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green font-bold text-xl">✓</span>
                                    <span>A deposit is required to secure your reservation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green font-bold text-xl">✓</span>
                                    <span>Full payment is due one week before your arrival date.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green font-bold text-xl">✓</span>
                                    <span>Reservations may be made by phone or through our online booking system.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green font-bold text-xl">✓</span>
                                    <span>We accept cash and major credit cards. No personal checks.</span>
                                </li>
                            </ul>
                        </Card>

                        {/* Cancellation Policy */}
                        <Card className="bg-white p-8 md:p-10 border-t-8 border-deep-burgundy">
                            <h2 className="text-3xl font-playfair text-deep-burgundy mb-6">Cancellation Policy</h2>
                            <ul className="space-y-4 text-bark-brown-dark list-none text-lg">
                                <li className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-tan-beige-light rounded">
                                    <span className="font-bold text-deep-burgundy min-w-[180px]">14+ days notice:</span>
                                    <span>Full refund minus a $25 processing fee.</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-tan-beige-light rounded">
                                    <span className="font-bold text-deep-burgundy min-w-[180px]">7-13 days notice:</span>
                                    <span>50% refund of deposit.</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-tan-beige-light rounded">
                                    <span className="font-bold text-deep-burgundy min-w-[180px]">Less than 7 days:</span>
                                    <span>No refund.</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-tan-beige-light rounded">
                                    <span className="font-bold text-deep-burgundy min-w-[180px]">No-shows:</span>
                                    <span>No refund.</span>
                                </li>
                            </ul>
                        </Card>

                        {/* Check-in/Check-out */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white p-8 border-l-4 border-bark-brown">
                                <h2 className="text-2xl font-playfair text-bark-brown-dark mb-4">Check-in</h2>
                                <div className="text-4xl font-bold text-forest-green mb-4">2:00 PM</div>
                                <ul className="space-y-2 list-disc pl-5 text-bark-brown-dark marker:text-forest-green">
                                    <li>Please check in at the General Store</li>
                                    <li>Late arrivals should call ahead</li>
                                </ul>
                            </Card>
                            <Card className="bg-white p-8 border-l-4 border-bark-brown">
                                <h2 className="text-2xl font-playfair text-bark-brown-dark mb-4">Check-out</h2>
                                <div className="text-4xl font-bold text-forest-green mb-4">11:00 AM</div>
                                <ul className="space-y-2 list-disc pl-5 text-bark-brown-dark marker:text-forest-green">
                                    <li>Please leave your site clean</li>
                                    <li>Return key cards to the office</li>
                                </ul>
                            </Card>
                        </div>

                        {/* Guest Policy */}
                        <Card className="bg-white p-8 md:p-10">
                            <h2 className="text-3xl font-playfair text-bark-brown-dark mb-6">Guest &amp; Visitor Policy</h2>
                            <ul className="space-y-3 text-bark-brown-dark list-disc pl-5 marker:text-forest-green text-lg">
                                <li>All guests must be registered at check-in.</li>
                                <li>Day visitors must register at the office and leave by 9:00 PM.</li>
                                <li>Maximum 6 people per campsite (varies for cabins).</li>
                                <li>Children under 18 must be accompanied by an adult.</li>
                            </ul>
                        </Card>

                        {/* Pet Policy */}
                        <Card className="bg-white p-8 md:p-10 border-t-8 border-bark-brown">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">🐕</span>
                                <h2 className="text-3xl font-playfair text-bark-brown-dark">Pet Policy</h2>
                            </div>

                            <ul className="space-y-4 text-bark-brown-dark list-none text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green">•</span>
                                    <span>Pets are welcome at most campsites (some restrictions apply).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green">•</span>
                                    <span>Pets must be on a leash (6 feet or less) at all times.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green">•</span>
                                    <span>Owners must clean up after their pets immediately.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-forest-green">•</span>
                                    <span>Pets may not be left unattended.</span>
                                </li>
                                <li className="flex items-start gap-3 p-2 bg-tan-beige rounded font-semibold text-deep-burgundy">
                                    <span className="text-deep-burgundy">!</span>
                                    <span>$5/pet/night fee applies.</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
