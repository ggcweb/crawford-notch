import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Reservations() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Book Your Stay</p>
                        <h1 style={{ color: '#fff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">Make a Reservation</h1>
                        <p style={{ color: '#fff' }} className="text-xl">Join us for your next adventure</p>
                    </div>
                </Section>

                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                            We&apos;re excited to welcome you to Crawford Notch Campground! To make a reservation, you can use our online booking system or contact us directly by phone.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Button variant="primary" size="lg" href="https://www.campspot.com/book/crawfordnotchcampground" target="_blank" rel="noopener noreferrer" className="text-xl px-14 py-7 shadow-xl" style={{ color: '#fff' }}>
                                Book Online Now
                            </Button>
                            <Button variant="outline" size="lg" href="tel:6033742779" className="text-xl px-14 py-7 bg-white">
                                Call (603) 374-2779
                            </Button>
                        </div>
                        {/* <div className="flex items-center justify-center gap-5 text-foreground">
                            <span className="h-px w-14 bg-bark-brown/30" />
                            <span className="text-sm uppercase tracking-[0.2em] font-bold">Or Request Info Below</span>
                            <span className="h-px w-14 bg-bark-brown/30" />
                        </div> */}
                    </div>
                </Section>
{/* 
                <Section variant="light">
                    <div className="max-w-3xl mx-auto">
                        <Card className="bg-white p-10 md:p-14 shadow-2xl border-t-4 border-forest-green">
                            <h2 className="text-4xl font-playfair text-bark-brown-dark text-center mb-10 font-bold">Request Information</h2>
                            <form className="space-y-7">
                                <div className="grid md:grid-cols-2 gap-7">
                                    {[{l:'First Name *',t:'text'},{l:'Last Name *',t:'text'}].map((f,i)=>(
                                        <div key={i} className="space-y-2.5">
                                            <label className="block text-foreground font-bold text-sm uppercase tracking-wider">{f.l}</label>
                                            <input type={f.t} required className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 transition-all text-lg" />
                                        </div>
                                    ))}
                                </div>
                                <div className="grid md:grid-cols-2 gap-7">
                                    {[{l:'Email *',t:'email'},{l:'Phone *',t:'tel'}].map((f,i)=>(
                                        <div key={i} className="space-y-2.5">
                                            <label className="block text-foreground font-bold text-sm uppercase tracking-wider">{f.l}</label>
                                            <input type={f.t} required className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 transition-all text-lg" />
                                        </div>
                                    ))}
                                </div>
                                <div className="grid md:grid-cols-2 gap-7">
                                    {[{l:'Arrival Date *'},{l:'Departure Date *'}].map((f,i)=>(
                                        <div key={i} className="space-y-2.5">
                                            <label className="block text-foreground font-bold text-sm uppercase tracking-wider">{f.l}</label>
                                            <input type="date" required className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 transition-all text-lg" />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2.5">
                                    <label className="block text-foreground font-bold text-sm uppercase tracking-wider">Site Type *</label>
                                    <select required className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green transition-all text-lg">
                                        <option value="">Select a site type...</option>
                                        <option value="tent-primitive">Tent Site (Primitive)</option>
                                        <option value="tent-electric">Tent Site (Electric)</option>
                                        <option value="rv">RV Site (Water/Electric)</option>
                                        <option value="cabin">Rustic Cabin</option>
                                        <option value="yurt">Yurt</option>
                                    </select>
                                </div>
                                <div className="grid md:grid-cols-2 gap-7">
                                    <div className="space-y-2.5">
                                        <label className="block text-foreground font-bold text-sm uppercase tracking-wider">Adults</label>
                                        <select className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green transition-all text-lg">
                                            {[1,2,3,4,5,6].map(n=><option key={n} value={n}>{n}{n===6?'+':''}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block text-foreground font-bold text-sm uppercase tracking-wider">Children</label>
                                        <select className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green transition-all text-lg">
                                            {[0,1,2,3,4,5].map(n=><option key={n} value={n}>{n}{n===5?'+':''}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="block text-foreground font-bold text-sm uppercase tracking-wider">Special Requests</label>
                                    <textarea rows={4} className="w-full px-5 py-3.5 bg-tan-beige-light/50 border-2 border-tan-beige rounded-lg focus:outline-none focus:border-forest-green transition-all resize-none text-lg" placeholder="Any special requests or questions..." />
                                </div>
                                <Button type="submit" variant="primary" size="lg" fullWidth className="py-5 text-xl">Submit Request</Button>
                            </form>
                        </Card>
                    </div>
                </Section> */}

                <Section variant="dark">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Before You Arrive</p>
                            <h2 style={{ color: '#fff' }} className="text-4xl font-playfair mb-5 font-bold">Reservation Information</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white/[0.10] backdrop-blur-sm border-none p-9">
                                <h3 style={{ color: '#fff' }} className="text-2xl font-bold mb-5 border-b border-white/20 pb-4">Check-in / Check-out</h3>
                                <ul className="space-y-4 list-none p-0">
                                    {[['Cabin Check-in:','3:00 PM'], ['Site Check-in', '1:00 PM'],['Check-out:','11:00 AM'],['Office hours:','8am - 8pm']].map(([k,v],i)=>(
                                        <li key={i} className="flex justify-between text-lg" style={{ color: '#fff' }}><span>{k}</span><span className="font-bold text-tan-beige">{v}</span></li>
                                    ))}
                                </ul>
                            </Card>
                            <Card className="bg-white/[0.10] backdrop-blur-sm border-none p-9">
                                <h3 style={{ color: '#fff' }} className="text-2xl font-bold mb-5 border-b border-white/20 pb-4">Cancellation Policy</h3>
                                <ul className="space-y-4 list-none p-0">
                                    {[['Outside of 30 days:','50% refund'],['Within 30 days','No refund']].map(([k,v],i)=>(
                                        <li key={i} className="flex justify-between text-lg" style={{ color: '#fff' }}><span>{k}</span><span>{v}</span></li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                        <div className="text-center mt-14">
                            <p style={{ color: '#fff' }} className="text-xl">
                                Please review our <Link href="/policies" className="text-tan-beige underline hover:no-underline font-bold">policies</Link> and <Link href="/rules" className="text-tan-beige underline hover:no-underline font-bold">rules</Link> before your visit.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
