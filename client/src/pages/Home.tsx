import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import CustomerMap from "@/components/CustomerMap";
import FlightsCounter from "@/components/FlightsCounter";
import { Testimonials } from "@/components/Testimonials";
import { VideoTestimonial } from "@/components/VideoTestimonial";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Bolder, Modern, High Impact */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image with Modern Gradient Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
              alt="Drone inspecting a telecom tower against a dark sky" 
              className="w-full h-full object-cover opacity-50"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Trusted by 36,000+ towers globally</span>
            </div>

            <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.95]">
              The operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">telecom infrastructure</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Design, validate, deploy, and govern network assets — digitally, accurately, and at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href="/contact" className="h-16 px-10 text-lg bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Talk to us <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/products/nexdt" className="h-16 px-10 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold inline-flex items-center gap-3">
                See NexDT in action
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Animated Flights Counter Section */}
      <FlightsCounter />

      {/* Executive Context - High Contrast & Asymmetric */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <p className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">The Problem</p>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
                  Most digital twins don't move the numbers.
                </h2>
              </div>
              
              <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-slate-600">
                <p>
                  They improve visibility. They reduce some site visits. They make inspection easier. <strong className="text-black font-semibold">But for most tower owners, the underlying workflows, costs, and timelines remain largely unchanged.</strong>
                </p>
                
                <div className="pl-8 border-l-4 border-blue-600">
                  <p className="text-black font-medium italic">
                    "Better pictures alone do not reduce cost or accelerate revenue."
                  </p>
                </div>
                
                <p>
                  NexDT is different. It's a next-generation digital twin designed to reduce operating cost, accelerate revenue, and enable wireless infrastructure portfolios to scale without proportional increases in complexity or headcount.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" 
                  alt="Engineering team collaborating on a digital twin project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-medium">Embedded in upgrade, colocation, engineering, and compliance workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Impact Metrics - Dark Mode Grid */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container">
          <div className="space-y-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Proven at scale.
              </h2>
              <p className="text-xl text-slate-400">
                NexDT is used in live production environments by customers managing more than <span className="text-white font-bold">36,000 towers and rooftops globally</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Upgrade Approval", value: "44 Days", sub: "Reduced from 8 months", color: "text-blue-400" },
                { label: "First Time Right", value: "80%", sub: "Improved from 32%", color: "text-green-400" },
                { label: "CO₂ Avoided", value: "5K+ Tonnes", sub: "Across the estate", color: "text-purple-400" },
                { label: "Climbs Avoided", value: "30K+", sub: "High-risk climbs", color: "text-orange-400" }
              ].map((metric, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className={`text-5xl font-bold tracking-tighter mb-4 ${metric.color}`}>{metric.value}</div>
                  <div className="text-lg font-medium text-white mb-2">{metric.label}</div>
                  <div className="text-sm text-slate-400">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <VideoTestimonial />

      {/* Testimonials Section */}
      <Testimonials />

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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
                  alt="Close-up of complex telecom tower structural details" 
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
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

              <p className="text-2xl font-bold text-foreground pt-8">
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

      {/* Trusted By - Customer Logos */}
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
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              If your priorities include efficiency, precision, and governance at scale -
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
