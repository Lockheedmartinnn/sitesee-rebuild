import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, ShieldCheck, Layers } from "lucide-react";

export default function NexDT() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Bolder, Modern */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="NexDT Platform"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Next-Generation Digital Twin</span>
            </div>

            <div className="mb-8">
              <img 
                src="/images/nexdt-logo.png" 
                alt="NexDT" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain brightness-0 invert"
              />
            </div>
            
            <p className="text-3xl md:text-4xl font-light text-slate-300 leading-tight max-w-3xl">
              The economics of tower portfolios, <span className="text-white font-medium">transformed.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href="/contact" className="h-16 px-10 text-lg bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Context - High Contrast */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">The Reality</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[0.95]">
                  Most digital twins don't move the numbers.
                </h2>
              </div>
              
              <div className="space-y-8 text-xl font-light leading-relaxed text-slate-600">
                <p>
                  They improve visibility. They reduce some site visits. They make inspection easier. <strong className="text-black font-semibold">But for most tower owners, the underlying workflows, costs, and timelines remain largely unchanged.</strong>
                </p>
                
                <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl">
                  <p className="text-2xl font-display font-bold text-black mb-4">
                    NexDT was built to address that gap.
                  </p>
                  <p className="text-lg text-slate-700">
                    Designed to reduce operating cost, accelerate revenue, and enable wireless infrastructure portfolios to scale without proportional increases in complexity or headcount.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" 
                  alt="Engineering Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2">Embedded in workflows</p>
                  <p className="text-lg opacity-80">Shifting decisions earlier in the lifecycle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations - Dark Mode Grid */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container">
          <div className="max-w-4xl mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-8">
              The limitation is structural.
            </h2>
            <p className="text-2xl text-slate-400 font-light leading-relaxed">
              Visual-only digital twins sit outside the workflows that determine cost, timing, and revenue. They inform decisions, but they do not change <span className="text-white font-medium">where or when</span> those decisions are made.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Late Validation", desc: "Engineering validation still happens late in the process, causing delays." },
              { title: "Hidden Risks", desc: "Compliance risks surface only after designs are already progressed." },
              { title: "Frequent Rework", desc: "Physical site access is still required to resolve uncertainty." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                  <span className="text-red-400 text-xl font-bold">!</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Extraction - Asymmetric & Bold */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
                  alt="Drone Capture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-4xl font-bold text-white mb-2">Same Cost.</div>
                  <div className="text-4xl font-bold text-blue-500">More Value.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[0.95]">
                The real question is <span className="text-blue-500">value extraction.</span>
              </h2>
              
              <div className="space-y-8 text-xl font-light leading-relaxed text-slate-400">
                <p>
                  For most tower owners, the cost of drone capture and processing is now broadly equivalent across providers. The initial investment is no longer the differentiator.
                </p>
                
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-medium text-white mb-4">
                    The Commercial Reality
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                      <span>The cost to capture a site is similar.</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <span className="text-white font-bold">The value extracted from that capture is not.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  A next-generation digital twin takes that same foundational investment and multiplies its value by embedding it directly into operational workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Next-Gen */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What makes a digital twin truly next generation
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 font-light">
            A next-generation digital twin is not defined by visual fidelity.
          </p>
          
          <p className="text-xl text-slate-300 mb-6 font-light">
            It is defined by where it sits in the operating model.
          </p>
          
          <p className="text-xl text-slate-300 mb-12 font-semibold">
            A true next-generation digital twin:
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Is embedded directly into upgrade, colocation, and compliance workflows",
                icon: "🔗"
              },
              {
                title: "Shifts feasibility, engineering, and risk decisions earlier",
                icon: "⏱️"
              },
              {
                title: "Replaces physical effort with digital certainty",
                icon: "✓"
              },
              {
                title: "Compresses the path from customer intent to revenue",
                icon: "→"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-6">
                <p className="text-lg font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-slate-300 mb-8">
            Rather than acting as a reference artifact, it becomes an operational system.
          </p>
          
          <p className="text-lg text-slate-300">
            This change in timing is what unlocks value. When decisions move earlier, cost, risk, and delay are structurally reduced rather than managed downstream.
          </p>
        </div>
      </section>

      {/* Financial Lever - Dark Mode Asymmetric */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
                  alt="Financial Impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[0.95]">
                NexDT is a financial <span className="text-blue-500">performance lever.</span>
              </h2>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                When a digital twin moves from being a reference tool to an operating system, the financial impact is immediate. By removing physical dependencies and enabling earlier validation, NexDT directly impacts the metrics that matter most.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Operating cost (OpEx)",
                  "Revenue acceleration",
                  "Capital efficiency (CapEx)",
                  "Scalability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cornerstone Case Study - High Impact Dark Mode */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]" />

        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-sm font-bold tracking-widest uppercase text-blue-300">Featured Outcome</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6">
              Tier-1 European TowerCo
            </h2>
            <p className="text-2xl text-slate-400 font-light">
              Outcomes based on more than <span className="text-white font-bold">3,000 Remote Site Visits</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { val: "44", unit: "Days", desc: "Approval timelines reduced from ~8 months", color: "text-blue-400" },
              { val: "80%", unit: "FTR", desc: "First Time Right improved from 32%", color: "text-green-400" },
              { val: "30K", unit: "Climbs", desc: "High-risk climbs avoided", color: "text-orange-400" },
              { val: "5K+", unit: "Tonnes CO₂", desc: "Emissions reduced across estate", color: "text-purple-400" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className={`text-6xl md:text-7xl font-display font-bold tracking-tighter mb-2 ${item.color}`}>{item.val}</div>
                <div className="text-xl font-bold text-white mb-4">{item.unit}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative">
              <div className="text-6xl text-blue-500 absolute top-6 left-6 opacity-20">"</div>
              <p className="text-2xl font-light italic mb-8 relative z-10">"NexDT changed how work flows through the organisation, not just how sites are viewed."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">CO</div>
                <div>
                  <p className="font-bold text-white">COO</p>
                  <p className="text-sm text-slate-400">Tier-1 TowerCo</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative">
              <div className="text-6xl text-blue-500 absolute top-6 left-6 opacity-20">"</div>
              <p className="text-2xl font-light italic mb-8 relative z-10">"Better decisions earlier removed rework and accelerated revenue."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold">HE</div>
                <div>
                  <p className="font-bold text-white">Head of Engineering</p>
                  <p className="text-sm text-slate-400">Tier-1 TowerCo</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-6 font-semibold">
            Beyond the operational and financial benefits, this has delivered a very real human outcome: more people returning home safely to their families every night.
          </p>
          
          <p className="text-lg text-slate-300">
            These outcomes are structural, repeatable, and achieved in business-as-usual operations. For marketing purposes, Cornerstone is referenced as a Tier-1 European TowerCo, but the operating model and results are directly transferable to comparable portfolios globally.
          </p>
        </div>
      </section>

      {/* ROI Mechanisms */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 rounded-2xl"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
                alt="ROI Visualization"
                className="w-full h-full object-cover rounded-2xl mix-blend-overlay"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Where the ROI comes from
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                Across live deployments, the return on investment from NexDT has been many multiples of the investment in the platform.
              </p>
              
              <p className="text-lg text-slate-300 mb-8 font-semibold">
                That return is driven by four reinforcing mechanisms:
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Operating cost reduction",
                    points: [
                      "Fewer physical site visits",
                      "Reduced contractor mobilisation",
                      "Lower per-site access and field service costs"
                    ]
                  },
                  {
                    num: "02",
                    title: "Engineering productivity and rework elimination",
                    points: [
                      "Earlier validation improves First Time Right",
                      "Fewer late-stage redesigns",
                      "Higher throughput without additional headcount"
                    ]
                  },
                  {
                    num: "03",
                    title: "Revenue acceleration and earlier cash conversion",
                    points: [
                      "Upgrade and colocation timelines compressed by months",
                      "Lease revenue realised materially earlier",
                      "Improved cash flow and capital efficiency"
                    ]
                  },
                  {
                    num: "04",
                    title: "Scale without proportional headcount growth",
                    points: [
                      "Higher volumes absorbed through workflow efficiency",
                      "Growth achieved without organisational drag"
                    ]
                  }
                ].map((mechanism, idx) => (
                  <div key={idx}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="text-blue-400 font-bold text-2xl min-w-fit">{mechanism.num}</div>
                      <h3 className="text-xl font-bold text-white">{mechanism.title}</h3>
                    </div>
                    <ul className="ml-16 space-y-2">
                      {mechanism.points.map((point, pidx) => (
                        <li key={pidx} className="text-slate-300 flex gap-2">
                          <span className="text-blue-400">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Unlocks */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What this unlocks for customers
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                Beyond direct cost and timing benefits, NexDT enables customers to operate differently.
              </p>
              
              <p className="text-lg text-slate-300 mb-8 font-semibold">
                Customers gain:
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  "Faster monetisation of existing assets",
                  "Improved return on invested capital",
                  "Materially reduced safety and delivery risk",
                  "Confidence to scale activity during demand spikes"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-slate-300 pt-1">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-slate-300 font-semibold">
                Growth becomes more predictable, not more fragile.
              </p>
            </div>
            
            <div className="relative h-96 md:h-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" 
                alt="Customer Success"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SiteSee is Different */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
                alt="SiteSee Platform"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why SiteSee is different
              </h2>
              
              <div className="space-y-8 mb-12">
                <div>
                  <p className="text-lg text-slate-300 mb-4">
                    <span className="font-semibold">SiteSee operates exclusively in the wireless telecommunications market.</span>
                  </p>
                  <p className="text-lg text-slate-300">
                    The company builds one platform for one industry. NexDT is software-first, capture-agnostic, and continuously refined based on live operational use.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-slate-300 mb-4">
                    <span className="font-semibold">This focus enables depth, relevance, and the ability to deliver measurable outcomes rather than incremental insight.</span>
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-slate-300 mb-4">
                    <span className="font-semibold">Adoption without disruption</span>
                  </p>
                  <p className="text-lg text-slate-300 mb-4">
                    NexDT is designed to be adopted progressively.
                  </p>
                  <p className="text-lg text-slate-300">
                    Customers expand digital coverage across their portfolios while maintaining operational continuity and control. Value is realised early, and benefits compound as coverage increases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Conclusion */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
                alt="Executive Conclusion"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <div>
              <p className="text-sm font-semibold text-blue-400 mb-4">EXECUTIVE CONCLUSION</p>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                NexDT has already proven, at scale, that a next-generation digital twin can deliver measurable financial, operational, safety, and sustainability outcomes for large tower portfolios.
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                This is not a future roadmap promise. It is a validated operating model.
              </p>
              
              <p className="text-lg text-slate-300">
                The commercial question is not whether NexDT is affordable. It is whether continuing to invest in digital capture without extracting maximum downstream value represents an acceptable opportunity cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your tower portfolio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover how NexDT can improve your economics and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
