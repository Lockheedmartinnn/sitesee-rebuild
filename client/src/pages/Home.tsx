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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
        {/* Video Background with Modern Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/XOOnORGCeeYOqnhD.mov" type="video/mp4" />
          </video>
          {/* Gradient removed for transparency */}
          {/* Gradient removed for transparency */}
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-10 relative z-10">
            {/* Subtle backdrop for text readability */}
            <div className="absolute -inset-8 bg-black/20 blur-3xl -z-10 rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Trusted by 36,000+ towers globally</span>
            </div>

            <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.95] drop-shadow-lg">
              AI Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Digital Twins</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md">
              Unlock the true value of your infrastructure. Accelerate upgrades, reduce costs, and optimize assets with the industry's most advanced digital twin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/products/nexdt" className="h-16 px-10 text-lg bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                  Explore NexDT <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="h-16 px-10 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold inline-flex items-center gap-3">
                  Talk to Sales
              </Link>
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
                  alt="Engineering team working on telecom tower infrastructure"
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
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/hmqsaTwUsXYiOWku.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Workflows - Flipped Asymmetric */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" 
                  alt="Telecom engineer performing site inspection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Current workflows are breaking.
              </h2>
              
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed">
                <p>
                  Spreadsheets, shared drives, and PDF reports can't handle the complexity of modern networks. Data is siloed, outdated, and often inaccurate.
                </p>
                <p>
                  This leads to costly site revisits, design failures, and safety risks that slow down deployment and increase CapEx.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8">
            Ready to digitize your portfolio?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the world's leading tower companies and MNOs running on SiteSee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full font-bold">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white text-white hover:bg-white hover:text-blue-600 font-bold">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
