import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, ShieldCheck, Layers, Box, Radio, Wind, Database, FileCheck, Ruler } from "lucide-react";
import { Link } from "wouter";

export default function NexDT() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">NexDT Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.95] drop-shadow-lg">
              The operational digital twin platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">purpose-built for telecom.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
              NexDT transforms how tower operators design, validate, and approve modifications—moving critical engineering decisions from weeks-long site-visit-dependent workflows into a real-time digital environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <a className="h-16 px-10 text-lg bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href="#overview" className="h-16 px-10 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-bold inline-flex items-center gap-3">
                Watch Platform Overview
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottleneck Problem */}
      <section className="py-32 bg-white text-black overflow-hidden" id="overview">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase">The Problem</p>
                <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[0.95]">
                  The Tower Modification Bottleneck
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>Every equipment change on your infrastructure triggers a cascade of dependencies:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-bold text-black min-w-[140px]">Site access required</span>
                    <span>Wait 2-4 weeks for scheduling, weather windows, landlord approval</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black min-w-[140px]">Manual measurements</span>
                    <span>Climbers document antenna positions, prone to ±5° tilt estimation errors</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black min-w-[140px]">Disconnected analysis</span>
                    <span>Structural assessment in one tool, EME in another, RF planning in a third</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black min-w-[140px]">Sequential workflows</span>
                    <span>Can't validate EME until structural is complete, can't optimize RF until EME passes</span>
                  </li>
                </ul>
                
                <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-r-xl mt-8">
                  <p className="font-bold text-red-900 mb-2">The Result:</p>
                  <p className="text-red-800">Modifications that should take days stretch into months. Colocation deals lost. 5G rollout delayed. CapEx trapped.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative">
                {/* Abstract visualization of bottleneck/chaos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-slate-100 p-8 flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300" />
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        Traditional
                      </h3>
                      <div className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">180 Days</div>
                    </div>
                    
                    <div className="space-y-6 relative">
                      {/* Timeline Line */}
                      <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-300" />
                      
                      <div className="relative flex items-start gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center z-10 shrink-0">
                          <span className="text-slate-400 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-500">Site Access Request</h4>
                          <p className="text-sm text-slate-400">Wait 2-4 weeks for scheduling</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center z-10 shrink-0">
                          <span className="text-slate-400 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-500">Manual Survey</h4>
                          <p className="text-sm text-slate-400">Climb team measurements</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center z-10 shrink-0">
                          <span className="text-slate-400 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-500">Data Processing</h4>
                          <p className="text-sm text-slate-400">Manual report generation</p>
                        </div>
                      </div>

                      <div className="relative flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center z-10 shrink-0 animate-pulse">
                          <span className="text-red-600 font-bold">!</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-red-600 text-lg">180 Days Total</h4>
                          <p className="text-sm text-red-500 font-medium">Traditional Workflow</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comparison Badge */}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-xl shadow-xl transform rotate-3 border-2 border-white z-20">
                      <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">With NexDT</p>
                      <p className="text-3xl font-bold">44 Days</p>
                      <p className="text-xs font-medium mt-1">Total Turnaround</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NexDT Solution Statement */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container max-w-5xl text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            NexDT: Digital Twin as <span className="text-blue-500">Operational System</span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
            NexDT is not a visualization platform. It's not a document repository. It's not a passive 3D model you look at occasionally.
          </p>
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
            NexDT is where tower modifications are designed, validated, and approved—digitally, before site access, before equipment procurement, before committing capital.
          </p>
        </div>
      </section>

      {/* What Makes NexDT Different */}
      <section className="py-32 bg-black text-white">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-5xl font-display font-bold tracking-tighter mb-6">What Makes NexDT Different</h2>
            <div className="h-1 w-20 bg-blue-600" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: "Indicative EME Analysis",
                desc: "ICNIRP 2020 / ARPANSA S-1 conformance modeling without site access. Generate exclusion zones (occupational & public) and validate safety before procurement.",
                stats: ["ICNIRP 2020", "ARPANSA S-1", "Exclusion Zones"]
              },
              {
                icon: Layers,
                title: "Integrated Engineering Analysis",
                desc: "Structural (IEA), electromagnetic (EME), and RF planning tools operate on the same digital twin. Design changes propagate instantly across all analysis workflows.",
                stats: ["No data re-entry", "No version conflicts", "Instant propagation"]
              },
              {
                icon: Database,
                title: "BIM-Enabled Equipment Library",
                desc: "Drag-and-drop equipment placement with complete technical specifications automatically attached: ESA, radiation patterns, weight, dimensions, and vendor part numbers.",
                stats: ["Vendor Specs", "ESA Values", "Mounting Req"]
              },
              {
                icon: Zap,
                title: "Scenario Modeling",
                desc: "Test multiple configurations in hours instead of waiting weeks. Validate structural capacity, ICNIRP conformance, and RF performance before ordering equipment.",
                stats: ["Test in hours", "Validate before ordering", "Optimize designs"]
              },
              {
                icon: ShieldCheck,
                title: "Baseline Engineering Integration",
                desc: "Certified structural engineers provide baseline tower models. NexDT uses these baselines for indicative load analysis—maintaining consistency with prior assessments.",
                stats: ["Certified Baselines", "Indicative Analysis", "Rapid Iteration"]
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.stats.map((stat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Deep Dive */}
      <section className="py-32 bg-white text-black">
        <div className="container space-y-32">
          
          {/* Capture */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider">
                Capture
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Autonomous Site Capture</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Measurement-grade data acquisition without manual surveying. No manual tagging required. No human-in-the-loop flight control. Fully autonomous from takeoff to landing.
              </p>
              <ul className="space-y-4">
                {[
                  "Planar Height Calculation – Automated reference plane detection",
                  "Collision Avoidance – Real-time obstacle detection",
                  "Adaptive Flight Planning – Adjusts to structure geometry",
                  "Equipment Recognition – AI identifies antennas & mounts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-video overflow-hidden shadow-xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/IwcDrkvTvPwIeTwW.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* TowerSee MAX */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-100 rounded-2xl aspect-video overflow-hidden shadow-xl">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GTsSufCWoapGCDcy.jpg" alt="TowerSee MAX Interface" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider">
                Construct
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Digital Twin Construction</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform raw drone data into engineering-ready digital twins. Interactive environment for drag-and-drop design, real-time collision detection, and multi-user collaboration.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic Asset Detection – AI classifies equipment types",
                  "Geometric Extraction – Position, bearing, tilt, roll",
                  "Equipment Metadata – Attach specs to assets",
                  "BIM Component Matching – Link to catalogue entries"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IEA & EME */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider">
                Analyze
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Integrated Engineering Analysis</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Indicative Structural (IEA)</h4>
                  <p className="text-slate-600">Predictive structural load analysis using certified baseline models. Real-time feedback on structure load, footing load, and tip rotation as you iterate designs.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Indicative EME</h4>
                  <p className="text-slate-600">ICNIRP 2020 / ARPANSA S-1 conformance modeling. Generate exclusion zones (occupational & public) without site access. Validate safety before procurement.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-video overflow-hidden shadow-xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/JIbuGIwuPEKCApNE.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Integrated Workflow: Design to Approval</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Traditional */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 opacity-70">
              <h3 className="text-2xl font-bold text-slate-400 mb-6">Traditional Serial Process</h3>
              <div className="space-y-4 relative pl-8 border-l border-slate-700">
                {[
                  "Schedule site access (2 weeks)",
                  "Climber audit and measurements (1 week)",
                  "Structural assessment (2 weeks)",
                  "Discover capacity issue → Redesign (1 week)",
                  "Re-submit structural (2 weeks)",
                  "EME assessment (2 weeks)",
                  "Regulatory approval (2-4 weeks)"
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-700" />
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-3xl font-bold text-red-400">Total: 12-16 Weeks</p>
                <p className="text-slate-400">Single redesign iteration</p>
              </div>
            </div>

            {/* NexDT */}
            <div className="p-8 rounded-2xl bg-blue-900/20 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">NexDT Parallel Workflow</h3>
              <div className="space-y-4 relative pl-8 border-l border-blue-500">
                {[
                  "Day 0: Access existing digital twin",
                  "Day 1-2: Design modification in NexDT (Drag-and-drop)",
                  "Day 2-3: Parallel validation (IEA & EME)",
                  "Day 4: Export optimized design for sign-off",
                  "Week 2: Certified structural sign-off",
                  "Week 2-3: Regulatory approval"
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <p className="text-lg font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-blue-500/30">
                <p className="text-3xl font-bold text-blue-400">Total: 2-3 Weeks</p>
                <p className="text-blue-200">Unlimited design iterations. 10-13 weeks saved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your tower operations?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Stop waiting for site visits. Start designing in the digital twin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <a className="h-16 px-12 text-xl bg-white text-blue-600 hover:bg-blue-50 border-0 font-bold rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                Request Demo
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
