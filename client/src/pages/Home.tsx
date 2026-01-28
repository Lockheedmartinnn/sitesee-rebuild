import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import CustomerMap from "@/components/CustomerMap";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Bentley Style with Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="Drone inspecting tower" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
                The operating system for telecom infrastructure
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl">
                Design, validate, deploy, and govern network assets — digitally, accurately, and at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <a href="/contact" className="h-14 px-8 text-base bg-white text-black hover:bg-gray-100 border-0 font-bold rounded-none inline-flex items-center gap-2">
                  Contact Us
                </a>
                <a href="/products/nexdt" className="h-14 px-8 text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none font-bold inline-flex items-center gap-2">
                  Explore NexDT
                </a>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/engineering-team-office.jpg" 
                  alt="Engineering team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black KPI Cards Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
              Save With SiteSee
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black text-white p-8 rounded-sm space-y-6 hover:shadow-2xl transition-shadow">
                <div className="text-5xl md:text-6xl font-display font-bold tracking-tighter">$12M+</div>
                <p className="text-base leading-relaxed">Operating cost reduction across portfolio</p>
              </div>
              <div className="bg-black text-white p-8 rounded-sm space-y-6 hover:shadow-2xl transition-shadow">
                <div className="text-5xl md:text-6xl font-display font-bold tracking-tighter">97%</div>
                <p className="text-base leading-relaxed">Right-First-Time (RFT) improvement</p>
              </div>
              <div className="bg-black text-white p-8 rounded-sm space-y-6 hover:shadow-2xl transition-shadow">
                <div className="text-5xl md:text-6xl font-display font-bold tracking-tighter">65%</div>
                <p className="text-base leading-relaxed">Reduction in site visit costs annually</p>
              </div>
              <div className="bg-black text-white p-8 rounded-sm space-y-6 hover:shadow-2xl transition-shadow">
                <div className="text-5xl md:text-6xl font-display font-bold tracking-tighter">3.2x</div>
                <p className="text-base leading-relaxed">Faster approval cycles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Customer Map Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Trusted Globally
              </h2>
              <p className="text-xl text-slate-600 mt-6">Deployed across major tower operators and infrastructure providers worldwide</p>
            </div>

            <CustomerMap />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'USA', customers: '12+' },
                { name: 'UK', customers: '8+' },
                { name: 'Australia', customers: '6+' },
                { name: 'Philippines', customers: '4+' },
                { name: 'Malaysia', customers: '3+' },
                { name: 'Oman', customers: '2+' },
              ].map((region) => (
                <div key={region.name} className="text-center p-6 bg-white rounded-sm border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-sm font-semibold text-slate-600 mb-2">REGION</p>
                  <p className="text-2xl font-bold text-foreground mb-1">{region.name}</p>
                  <p className="text-lg text-blue-600 font-bold">{region.customers} Operators</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof at Scale - Dark Section with Visual */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container">
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  5,372
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">Site Capture Surveys</p>
              </div>
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  97%
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">Right-First-Time</p>
              </div>
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  1,641
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">Climbs Avoided</p>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-white/90 italic border-l-4 border-blue-500 pl-8 font-light">
                These aren't projections. They're operational results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-4">
                <div className="text-6xl md:text-7xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  2,736
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">rMSV Projects</p>
              </div>
              <div className="space-y-4">
                <div className="text-6xl md:text-7xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  694K kg
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">CO₂ Emissions Reduced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Reality - Asymmetric Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Telecom infrastructure is no longer simple.
              </h2>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">The Reality</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Multi-tenant towers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Constant upgrade cycles</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Tight regulatory constraints</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Zero tolerance for rework</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/tower-structural-detail.jpg" 
                  alt="Tower structural detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Workflows - Flipped Asymmetric */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/digital-interface-clean.jpg" 
                  alt="Digital interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Yet most workflows still rely on fragmented tools.
              </h2>

              <div className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-slate-400 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">PDFs</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-slate-400 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Static drawings</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-slate-400 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Manual checks</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-slate-400 font-bold text-xl">•</span>
                    <span className="text-lg text-foreground">Disconnected tools</span>
                  </li>
                </ul>
              </div>

              <p className="text-2xl font-bold text-red-600 pt-8">
                That gap is where risk, cost, and delay live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Dark Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              SiteSee replaces fragmented workflows with a single source of spatial truth.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Faster</h3>
                <p className="text-white/80 leading-relaxed">Eliminate manual workflows and accelerate approvals.</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Governed</h3>
                <p className="text-white/80 leading-relaxed">Role-based controls and enforced standards.</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Auditable</h3>
                <p className="text-white/80 leading-relaxed">Complete transaction history and compliance records.</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Scalable</h3>
                <p className="text-white/80 leading-relaxed">Consistent workflows across thousands of sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NexDT Introduction - Featured Section */}
      <section className="py-24 md:py-32 bg-white border-y border-slate-200">
        <div className="container">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Platform</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                NexDT by SiteSee
              </h2>
            </div>

            <p className="text-3xl font-bold text-blue-600">
              Design. Validate. Approve. Govern.
            </p>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              NexDT is SiteSee's digital twin platform for pre-as-built design, colocation workflows, engineering governance, and portfolio-scale decision making. Built for how real towercos operate, not demos.
            </p>

            <a href="/products/nexdt" className="h-14 px-8 text-base bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-none inline-flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA - Dark with Impact      {/* Trusted By - Customer Logos */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-4">
                Trusted by:
              </h2>
              <div className="w-24 h-1 bg-blue-500"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: 'Fortysouth', placeholder: true },
                { name: 'PhilPower', placeholder: true },
                { name: 'Telstra', placeholder: true },
                { name: 'Reliance Jio', placeholder: true },
                { name: 'American Tower', placeholder: true },
                { name: 'Vodafone', placeholder: true },
                { name: 'Titanict', placeholder: true },
                { name: 'Cornerstone', placeholder: true },
              ].map((company) => (
                <div key={company.name} className="bg-white rounded-sm p-8 flex items-center justify-center min-h-[200px] shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <p className="text-slate-400 font-semibold text-lg">{company.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dark Section */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              If your priorities include efficiency, precision, and governance at scale—
            </h2>

            <p className="text-3xl font-bold">
              Then the conversation is overdue.
            </p>

            <a href="/contact" className="h-14 px-8 text-base bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold rounded-none inline-flex items-center gap-2">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
