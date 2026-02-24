import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Activity, BarChart3, AlertTriangle, Clock, ShieldCheck, Database, Layers, Zap } from "lucide-react";
import { Link } from "wouter";

export default function IEA() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/JIbuGIwuPEKCApNE.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Predictive Load Analysis</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Indicative Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Assessment (IEA)</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Validate structural design changes digitally—before ordering equipment, before engineering sign-off, before discovering you've exceeded tower capacity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                Download IEA Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Structural Bottleneck Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The Structural Bottleneck
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every equipment change on a tower requires structural validation—adding colocation tenants, 5G upgrades, antenna repositioning, or mount modifications.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Traditional Delays
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Engineering dependency:</strong> Every change requires certified structural engineer review, adding weeks to timelines.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Late-stage discoveries:</strong> Structural capacity issues found after equipment ordered and shipped to site.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Conservative over-design:</strong> Without fast iteration, operators add unnecessary structural reinforcement to "be safe".</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg font-medium text-slate-900 border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                Result: Months-long approval cycles. Revenue opportunities lost. CapEx wasted on over-engineered solutions.
              </p>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/JIbuGIwuPEKCApNE.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-8 h-8 text-amber-400" />
                    <div>
                      <div className="text-white font-bold text-lg">Traditional Process</div>
                      <div className="text-slate-300 text-sm">6-10 Weeks per Iteration</div>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Predictive Load Analysis in the Digital Twin
            </h2>
            <p className="text-lg text-slate-400">
              The IEA Tool allows users to test structural design scenarios rapidly and indicatively within NexDT, using baseline structural models provided by certified structural engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">1. Baseline Model</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Certified structural engineer provides baseline configuration: wind speeds, bending moments, shear, and current utilisation.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">2. Equipment Database</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Effective Sail Area (ESA) and height data captured from digital twin, vendor specs, and equipment schedules.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">3. Drag-and-Drop</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Modify tower configuration in NexDT: add antennas, reposition equipment, or test mounting configurations.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">4. Instant Results</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Recalculates structural impact using additive techniques. Immediate feedback on structure load, footing load, and tip rotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Outcomes Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Engineering Outcomes: What You Get
            </h2>
            <p className="text-lg text-slate-600">
              Three critical structural parameters estimated instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Structure Load</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Maximum utilisation of the leg, bracing, or pole expressed as percentage (%).
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-slate-700"><strong>&lt;80%:</strong> Green (Proceed)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-slate-700"><strong>80-95%:</strong> Amber (Review)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-slate-700"><strong>&gt;95%:</strong> Red (Modify)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Footing Load</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Maximum utilisation of footing in bending/shear, hold-down bolts, or overturning ratio (%).
              </p>
              <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-600 italic">
                "Critical for monopoles and guyed towers where foundation capacity is often the limiting factor."
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tip Rotation</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Rotation of the pole at a defined height above ground level, expressed in degrees (°).
              </p>
              <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-600 italic">
                "Serviceability limit state check—excessive rotation affects antenna performance."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Comparison Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Workflow Integration
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Timeline */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 opacity-70">
                <h3 className="text-xl font-bold text-slate-500 mb-6">Before IEA Tool</h3>
                <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Propose Change</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Submit to Engineer</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Wait 2-4 Weeks</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Discover Issue & Redesign</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Wait Another 2-4 Weeks</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                  <div className="text-3xl font-bold text-slate-400">6-10 Weeks</div>
                  <div className="text-sm text-slate-500">Total Time</div>
                </div>
              </div>

              {/* SiteSee Timeline */}
              <div className="p-8 rounded-2xl border-2 border-blue-100 bg-blue-50/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  ACCELERATED
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-6">With IEA Tool</h3>
                <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-200">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Propose Change in NexDT</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Instant Utilisation Result</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Iterate Real-Time</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Submit Optimized Design</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Sign-off in 1-2 Weeks</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600">2-3 Weeks</div>
                  <div className="text-sm text-blue-700">Total Time (Multiple Iterations)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-slate-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Important Disclaimer</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  The IEA Tool provides indicative results only. It is not a substitute for detailed structural certification or engineering approval. All final assessments must be performed by a qualified structural engineer in accordance with applicable standards (AS/NZS 1170, AS/NZS 7000, etc.).
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <div className="font-bold text-slate-900 mb-2">Designed to:</div>
                    <ul className="space-y-1 text-slate-600 list-disc pl-4">
                      <li>Accelerate design iteration</li>
                      <li>Identify potential structural issues early</li>
                      <li>Optimize configurations before formal review</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-2">Does not replace:</div>
                    <ul className="space-y-1 text-slate-600 list-disc pl-4">
                      <li>Certified structural analysis</li>
                      <li>Engineer sign-off</li>
                      <li>Regulatory approval processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Streamline Tower Upgrades with NexDT
            </h2>
            <p className="text-xl text-blue-100">
              Ensure engineering models are consistently used for sign-offs. Rapidly prototype design scenarios and submit thoroughly vetted modifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-lg">
                  Request Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
