import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/Testimonials";
import { VideoTestimonial } from "@/components/VideoTestimonial";

export default function Value() {
  return (
    <div className="flex flex-col">
      {/* Hero - Dark with Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
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

      {/* Cornerstone Case Study - Comprehensive */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Case Study</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Proven Outcomes — Cornerstone (UK)
              </h2>
              <p className="text-xl text-slate-600">
                18 months of live production use across thousands of active sites
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Over the past 18 months, NexDT has been used operationally across thousands of active sites for Cornerstone, one of Europe's largest TowerCos. NexDT operates under an active, multi-year contract and is embedded directly into day-to-day production workflows. Based on more than 3,000 Remote Site Visits (rMSVs), Cornerstone has reported the following outcomes:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground">Dramatically Faster Upgrade Approval</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-blue-600">8 months</div>
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                    <div className="text-4xl font-bold text-green-600">44 days</div>
                  </div>
                  <p className="text-slate-700">Design delivery approval reduced by 95%</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Feasibility issues resolved earlier</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Engineering validation before physical access</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Compliance issues surfaced early</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 p-8 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground">Step-Change in First Time Right (FTR)</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-slate-400">~32%</div>
                    <ArrowRight className="w-6 h-6 text-green-600" />
                    <div className="text-4xl font-bold text-green-600">~80%</div>
                  </div>
                  <p className="text-slate-700">FTR increased by 150% - nearly 2.5x improvement</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Rework and late-stage redesign materially reduced</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Engineering throughput increased without additional headcount</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Higher quality outputs, fewer iterations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground">Measurable Sustainability Impact</h3>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-purple-600">253 kg CO₂</div>
                  <p className="text-slate-700">Emissions avoided per site</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>5,000+ tonnes avoided across the estate</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>Equivalent to removing hundreds of vehicles from roads</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>Real environmental impact from operational efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 p-8 bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-600 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground">Material Safety & Risk Reduction</h3>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-red-600">1.5 climbs</div>
                  <p className="text-slate-700">High-risk tower climbs reduced per site</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span>30,000+ high-risk climbs avoided across estate</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span>Reduced safety exposure and insurance risk</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span>More people returning home safely every night</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold">These outcomes are structural, repeatable, and achieved in business-as-usual operations.</span> For marketing purposes, Cornerstone is referenced as a Tier-1 European TowerCo, but the operating model and results are directly transferable to comparable portfolios globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <VideoTestimonial />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Where the ROI Comes From */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-6">
                Where the ROI comes from
              </h2>
              <p className="text-xl text-slate-300">
                Across live deployments, the return on investment from NexDT has been many multiples of the investment in the platform. That return is driven by four reinforcing mechanisms:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  num: "01",
                  title: "Operating Cost Reduction",
                  description: "Fewer physical site visits, reduced contractor mobilisation, lower per-site access and field service costs",
                  impact: "Millions in avoided costs"
                },
                {
                  num: "02",
                  title: "Engineering Productivity & Rework Elimination",
                  description: "Earlier validation improves First Time Right, fewer late-stage redesigns, higher throughput without additional headcount",
                  impact: "2.5x improvement in FTR"
                },
                {
                  num: "03",
                  title: "Revenue Acceleration & Cash Conversion",
                  description: "Upgrade and colocation timelines compressed by months, lease revenue realised materially earlier, improved cash flow",
                  impact: "Months of acceleration"
                },
                {
                  num: "04",
                  title: "Scale Without Proportional Headcount Growth",
                  description: "Higher volumes absorbed through workflow efficiency, growth achieved without organisational drag",
                  impact: "Infinite scalability"
                }
              ].map((mechanism, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:bg-slate-800 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-blue-400">{mechanism.num}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{mechanism.title}</h3>
                      <p className="text-blue-400 font-semibold">{mechanism.impact}</p>
                    </div>
                  </div>
                  <p className="text-slate-300">{mechanism.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-8">
              <p className="text-xl text-white font-semibold">
                These four mechanisms are reinforcing. As one improves, it enables the others to compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Unlocks */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                What this unlocks for customers
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed">
                Beyond direct cost and timing benefits, NexDT enables customers to operate differently. Customers gain:
              </p>

              <div className="space-y-6">
                {[
                  "Faster monetisation of existing assets",
                  "Improved return on invested capital",
                  "Materially reduced safety and delivery risk",
                  "Confidence to scale activity during demand spikes"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-8">
                <p className="text-2xl font-bold text-blue-600 italic">
                  Growth becomes more predictable, not more fragile.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" 
                  alt="Customer success" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Scale - Light Section with Image */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Built for Scale
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thousands of live sites</h3>
                    <p className="text-slate-600 text-lg">Deployed across major tower operators globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Embedded in production workflows</h3>
                    <p className="text-slate-600 text-lg">Not a pilot. Not a trial. Live operations at scale.</p>
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
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
                  alt="Tower infrastructure" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Conclusion */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 md:h-full">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
                alt="Executive conclusion"
                className="w-full h-full object-cover rounded-lg"
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
              
              <p className="text-lg text-slate-300 mb-8">
                The commercial question is not whether NexDT is affordable. It is whether continuing to invest in digital capture without extracting maximum downstream value represents an acceptable opportunity cost.
              </p>

              <p className="text-lg text-slate-300 font-semibold">
                For tower owners focused on improving portfolio economics, the conversation is overdue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 max-w-4xl">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              Ready to improve your tower portfolio economics?
            </h2>

            <p className="text-2xl font-light">
              Discover how NexDT can deliver measurable financial, operational, and safety outcomes for your infrastructure portfolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="h-14 px-8 text-base bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold rounded-none inline-flex items-center gap-2">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/products/nexdt" className="h-14 px-8 text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-none font-bold inline-flex items-center gap-2">
                Learn More About NexDT
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
