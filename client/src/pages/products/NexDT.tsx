import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NexDT() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                NexDT
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-8 text-slate-200">
                A Next-Generation Digital Twin That Improves the Economics of Tower Portfolios
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
              <img 
                src="/images/hero-drone-tower-v2.jpg" 
                alt="NexDT Platform"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Context */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400 mb-4">EXECUTIVE CONTEXT</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Most digital twins don't move the numbers and don't improve the economics of tower portfolios.
              </h2>
              
              <p className="text-lg text-slate-300 mb-6">
                They improve visibility. They reduce some site visits. They make inspection easier. But for most tower owners, the underlying workflows, costs, and timelines remain largely unchanged.
              </p>
              
              <p className="text-lg text-slate-300 mb-8 font-semibold">
                NexDT was built to address that gap.
              </p>
              
              <p className="text-lg text-slate-300 mb-6">
                NexDT is a next-generation digital twin designed to reduce operating cost, accelerate revenue, and enable wireless infrastructure portfolios to scale without proportional increases in complexity or headcount.
              </p>
              
              <p className="text-lg text-slate-300">
                Unlike first-generation digital twins that stop at visualisation, NexDT is embedded directly into upgrade, colocation, engineering, and compliance workflows. It shifts key decisions earlier in the lifecycle, replacing physical effort and late-stage rework with digital certainty.
              </p>
            </div>
            
            <div className="relative h-96 md:h-full">
              <img 
                src="/images/engineering-team-office.jpg" 
                alt="Engineering Team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Limitations of First-Gen */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            The limitation of first-generation digital twins
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 font-semibold">
            Most first-generation digital twins are visual-only.
          </p>
          
          <p className="text-lg text-slate-300 mb-8">
            They provide inspection imagery, basic measurements, and improved visibility compared to traditional photo sets. These capabilities improve safety and reduce some site visits, but their impact plateaus quickly at portfolio scale.
          </p>
          
          <p className="text-lg text-slate-300 mb-8 font-semibold">
            The limitation is structural.
          </p>
          
          <p className="text-lg text-slate-300 mb-8">
            Visual-only digital twins sit outside the workflows that determine cost, timing, and revenue. They inform decisions, but they do not change where or when those decisions are made.
          </p>
          
          <p className="text-lg text-slate-300 mb-12 font-semibold">
            As a result:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Engineering validation still happens late",
              "Compliance risks surface after designs are progressed",
              "Rework remains common",
              "Physical site access is still required to resolve uncertainty",
              "Revenue realisation is delayed by sequential, site-dependent processes"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-slate-300 mb-6">
            Many platforms now claim to be "next-generation" by adding individual features on top of a visual twin. But without deep integration into upgrade and colocation workflows, these additions rarely translate into material financial outcomes.
          </p>
          
          <p className="text-xl text-slate-300 font-semibold">
            Better visibility alone does not change the economics of tower operations.
          </p>
        </div>
      </section>

      {/* Value Extraction */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img 
                src="/images/tower-structural-detail.jpg" 
                alt="Drone Capture"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The real question is not cost, but value extraction
              </h2>
              
              <p className="text-lg text-slate-300 mb-6">
                For most tower owners, the cost of drone capture and processing is now broadly equivalent across providers.
              </p>
              
              <p className="text-lg text-slate-300 mb-6">
                Whether a site is captured for a first-generation, visual-only digital twin or for a next-generation platform, the underlying inputs are largely the same:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Drone mobilisation",
                  "Flight time",
                  "Image capture",
                  "Data processing"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-slate-300">
                    <span className="text-blue-400 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-slate-300 mb-6">
                The initial investment required to create a digital representation of a site is no longer the differentiator.
              </p>
              
              <p className="text-lg text-slate-300 mb-6 font-semibold">
                The real commercial question is what value is extracted <span className="italic">after</span> that investment is made.
              </p>
              
              <p className="text-lg text-slate-300 mb-6">
                First-generation digital twins monetise only a fraction of the potential value locked in capture data. They improve visibility, but leave most operational, engineering, and commercial decisions unchanged.
              </p>
              
              <p className="text-lg text-slate-300 mb-6">
                A next-generation digital twin takes that same foundational investment and multiplies its value by embedding it directly into operational workflows.
              </p>
              
              <p className="text-lg text-slate-300 font-semibold">
                In practical terms:
              </p>
              
              <ul className="space-y-3 mt-6">
                {[
                  "The cost to capture a site is similar",
                  "The value extracted from that capture is not"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-slate-300">
                    <span className="text-blue-400 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-slate-300 mt-8">
                For customers, the decision shifts from "which digital twin is cheaper" to which platform extracts the maximum value from an investment that must be made anyway.
              </p>
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

      {/* NexDT as Financial Lever */}
      <section className="py-20 md:py-32 bg-slate-950 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                NexDT as a financial performance lever
              </h2>
              
              <p className="text-lg text-slate-300 mb-6">
                NexDT is SiteSee's next-generation digital twin platform, purpose-built for tower and rooftop portfolios.
              </p>
              
              <p className="text-lg text-slate-300 mb-8 font-semibold">
                It is not positioned as:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "A visualisation tool",
                  "A survey replacement",
                  "An inspection platform"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-slate-300">
                    <span className="text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-slate-300 mb-6 font-semibold">
                NexDT is designed to operate as a <span className="text-blue-400">financial performance lever</span> by embedding directly into the workflows that govern:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Upgrade feasibility",
                  "Colocation design",
                  "Engineering throughput",
                  "Compliance screening",
                  "Delivery timing"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-slate-300">
                    <span className="text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-slate-300 mb-6">
                By enabling high-confidence, early-stage decisions, NexDT changes the economics of tower operations. Costs are removed rather than absorbed. Time is compressed rather than managed. Capacity is increased without adding headcount.
              </p>
              
              <p className="text-lg text-slate-300 font-semibold">
                This operating model has been validated in live production environments.
              </p>
            </div>
            
            <div className="relative h-96 md:h-full">
              <img 
                src="/images/digital-interface-clean.jpg" 
                alt="NexDT Interface"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven outcomes from live operations at scale
          </h2>
          
          <p className="text-lg text-slate-300 mb-12">
            Over the past 18 months, NexDT has been used operationally across thousands of active sites for Cornerstone, one of Europe's largest TowerCos. NexDT operates under an active, multi-year contract and is embedded directly into day-to-day production workflows.
          </p>
          
          <p className="text-lg text-slate-300 mb-12">
            Based on more than 3,000 Remote Site Visits (rMSVs), Cornerstone has reported the following outcomes:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Dramatically faster upgrade approval",
                points: [
                  "Design delivery approval reduced from approximately 8 months to 44 days",
                  "Feasibility, engineering, and compliance issues resolved earlier, before physical access or late-stage escalation"
                ]
              },
              {
                title: "Step-change improvement in First Time Right (FTR)",
                points: [
                  "FTR increased from approximately 32% to nearly 80%",
                  "Rework and late-stage redesign materially reduced",
                  "Engineering throughput increased without additional headcount"
                ]
              },
              {
                title: "Measurable sustainability impact",
                points: [
                  "253 kg of CO₂ emissions avoided per site",
                  "Equating to more than 5,000 tonnes avoided across the estate"
                ]
              },
              {
                title: "Material safety and risk reduction",
                points: [
                  "High-risk tower climbs reduced by 1.5 climbs per site",
                  "Equivalent to approximately 30,000 high-risk climbs to be avoided",
                  "Reduced safety exposure, insurance risk, and compliance burden"
                ]
              }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-white">{outcome.title}</h3>
                <ul className="space-y-3">
                  {outcome.points.map((point, pidx) => (
                    <li key={pidx} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                src="/images/hero-drone-tower-v2.jpg" 
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
                src="/images/engineering-team-office.jpg" 
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
                src="/images/digital-interface-clean.jpg" 
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
                src="/images/hero-drone-tower-v2.jpg" 
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
