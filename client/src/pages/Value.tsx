import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Value() {
  return (
    <div className="flex flex-col">
      {/* Hero - Dark with Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="Tower infrastructure" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-2xl space-y-12">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              NexDT as a financial performance lever
            </h1>
            
            <p className="text-2xl text-white/80 leading-relaxed">
              This is not a technology upgrade. It is a structural operating model improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Cornerstone Case Study - Asymmetric */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Case Study</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                  Proven Outcomes — Cornerstone (UK)
                </h2>
                <p className="text-xl text-slate-600">
                  18 months of live production use
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-6 p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-foreground">Operating Cost Reduction</h3>
                  <p className="text-lg text-slate-700">Replacement of physical surveys with rMSVs</p>
                  <p className="text-3xl font-bold text-blue-600">Millions in avoided access and contractor costs</p>
                </div>

                <div className="space-y-6 p-8 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold text-foreground">Engineering Productivity</h3>
                  <p className="text-lg text-slate-700">RFT (Right-First-Time) improvement</p>
                  <div className="flex items-center gap-8 pt-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-2">Before</p>
                      <p className="text-5xl font-bold text-slate-400">~30%</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600 mb-2">After</p>
                      <p className="text-5xl font-bold text-green-600">~80%</p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 pt-4">Higher throughput without headcount growth</p>
                </div>

                <div className="space-y-6 p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600">
                  <h3 className="text-2xl font-bold text-foreground">Revenue Acceleration</h3>
                  <p className="text-lg text-slate-700">Upgrade and colocation timelines compressed</p>
                  <p className="text-3xl font-bold text-purple-600">Lease revenue realised materially earlier</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24 aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/digital-interface-clean.jpg" 
                  alt="Digital interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means - Dark Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              What This Means for Tower Owners
            </h2>

            <p className="text-2xl text-white/80 leading-relaxed">
              For executives, the upside is clear:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Faster Approvals</h3>
                <p className="text-white/80 text-lg">Faster revenue realisation</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Fewer Site Visits</h3>
                <p className="text-white/80 text-lg">Lower operational expense</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Better Data</h3>
                <p className="text-white/80 text-lg">Stronger capital decisions</p>
              </div>
              <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">Scale Without Cost</h3>
                <p className="text-white/80 text-lg">Scale without proportional cost growth</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-12">
              <p className="text-3xl font-bold text-blue-400 italic">
                This is portfolio-level leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Scale - Light Section with Image */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Built for Scale
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thousands of live sites</h3>
                    <p className="text-slate-600 text-lg">Deployed across major tower operators</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Embedded in production workflows</h3>
                    <p className="text-slate-600 text-lg">Not a pilot. Not a trial. Live operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Multi-year contracts</h3>
                    <p className="text-slate-600 text-lg">Long-term partnerships with infrastructure operators</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Designed for long-life assets</h3>
                    <p className="text-slate-600 text-lg">Built to run infrastructure for decades</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <p className="text-2xl font-bold text-blue-600 italic">
                  This isn't a pilot. It's infrastructure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/tower-structural-detail.jpg" 
                  alt="Tower infrastructure" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
              If your priorities include efficiency, precision, and governance at scale—
            </h2>

            <p className="text-3xl font-bold">
              Then the conversation is overdue.
            </p>

            <Link href="/contact">
              <Button className="h-14 px-8 text-base bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold rounded-none">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
