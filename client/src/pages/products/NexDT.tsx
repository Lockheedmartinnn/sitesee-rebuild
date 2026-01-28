import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function NexDT() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="NexDT Platform" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-2xl space-y-12">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              NexDT Platform
            </h1>
            
            <p className="text-2xl text-white/80 leading-relaxed">
              Design. Validate. Approve. Govern. The complete digital twin ecosystem for telecom infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button className="h-14 px-8 text-base bg-white text-black hover:bg-gray-100 border-0 font-bold rounded-none">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                How NexDT Works
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Access & Governance First</h3>
                    <p className="text-slate-600 text-lg">MFA-protected. Role-based. Enforced by design.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Colo Users Design Digitally</h3>
                    <p className="text-slate-600 text-lg">Rip. Replace. Position. Assess — inside a live 3D environment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Engineers Stay in Control</h3>
                    <p className="text-slate-600 text-lg">Visual review. Overrides. Standards-based approvals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">BIM Data That Matters</h3>
                    <p className="text-slate-600 text-lg">Validated geometry, ESA, EME-ready equipment libraries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Full Auditability</h3>
                    <p className="text-slate-600 text-lg">Every change logged. No ambiguity.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src="/images/digital-interface-clean.jpg" 
                    alt="NexDT Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Dark Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container">
          <div className="space-y-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              Enterprise-Grade Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Pre-as-built Design", desc: "Design equipment placement before physical installation" },
                { title: "Colocation Workflows", desc: "Streamline multi-tenant coordination and approvals" },
                { title: "3D Visualization", desc: "Immersive digital twin environment for all stakeholders" },
                { title: "Equipment Library", desc: "Pre-configured, standards-compliant component database" },
                { title: "Compliance Tracking", desc: "Automated regulatory and safety compliance checks" },
                { title: "Integration Ready", desc: "APIs for seamless integration with existing systems" },
              ].map((feature, idx) => (
                <div key={idx} className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
              Built for Real Workflows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6 p-8 border border-slate-200 rounded-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground">Tower Operators</h3>
                <p className="text-slate-600 leading-relaxed">Manage portfolio-scale approvals, reduce site visits, accelerate revenue.</p>
                <Link href="/industries/telco">
                  <a className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>

              <div className="space-y-6 p-8 border border-slate-200 rounded-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground">Engineering Teams</h3>
                <p className="text-slate-600 leading-relaxed">Enforce standards, maintain control, improve RFT through visual review.</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-6 p-8 border border-slate-200 rounded-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground">Colocation Partners</h3>
                <p className="text-slate-600 leading-relaxed">Design in 3D, get instant feedback, reduce rework cycles.</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              Ready to transform your infrastructure workflows?
            </h2>

            <Link href="/contact">
              <Button className="h-14 px-8 text-base bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold rounded-none">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
