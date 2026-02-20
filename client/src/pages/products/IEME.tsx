import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Radio, ShieldCheck, Zap, Activity, FileWarning, Globe, Building2, Users, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function IEME() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Video Background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/znOqCOTZHOvuEmEa.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">RF Safety & Compliance</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ensuring ICNIRP Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Before Installation</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              SiteSee's EME Analysis solution enables tower operators and MNOs to proactively manage RF safety compliance before any equipment is physically deployed. Identify and resolve compliance issues early—eliminating costly site visits and ensuring regulatory adherence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Request Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Compliance is No Longer Optional
            </h2>
            <p className="text-lg text-slate-600">
              The traditional workflow for EME compliance is reactive, expensive, and prone to delays.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Traditional Workflow Issues
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="leading-relaxed">Site visits required for every new installation or modification</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="leading-relaxed">Compliance issues discovered late, after equipment is ordered</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="leading-relaxed">Public concerns unaddressed until after antennas are installed</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="leading-relaxed">Rework and delays when exclusion zones extend beyond expected boundaries</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 px-2">Particularly Problematic For:</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Building2 className="w-6 h-6 text-blue-600 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Rooftop Installations</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Where RF signals may penetrate adjacent buildings or residential areas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Activity className="w-6 h-6 text-blue-600 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Multi-Tenant Towers</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Complex antenna configurations with overlapping coverage patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Users className="w-6 h-6 text-blue-600 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Urban Environments</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Where compliance zones may affect public access areas or neighboring properties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black">
               <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/znOqCOTZHOvuEmEa.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <h3 className="text-white font-bold text-xl mb-2">Real-World Impact</h3>
                  <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                    Uncertainty about RF penetration creates tenant concerns, landlord hesitation, and regulatory scrutiny. Visual evidence is the key to confidence.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-900/30 px-3 py-1.5 rounded-full w-fit border border-green-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>SiteSee Solves This</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                With SiteSee EME Analysis
              </h2>
              <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                Transform your compliance workflow from reactive to proactive.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-lg shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Digital Modeling</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Model the installation digitally with proposed antenna heights, azimuths, and transmit powers before any physical work begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-lg shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">3D Visualization</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Visualize exclusion zones in 3D relative to occupied spaces in the building and neighboring structures. Confirm all occupied areas remain within safe limits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-lg shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Optimization & Evidence</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Adjust design to minimize RF propagation toward sensitive areas. Present visual evidence to landlords and authorities showing compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center">The Result</h3>
              <div className="grid gap-4">
                <div className="p-5 bg-slate-700/50 rounded-xl flex items-center gap-4 border border-slate-600/50 hover:bg-slate-700 transition-colors">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  </div>
                  <span className="font-medium text-lg">Faster approvals</span>
                </div>
                <div className="p-5 bg-slate-700/50 rounded-xl flex items-center gap-4 border border-slate-600/50 hover:bg-slate-700 transition-colors">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  </div>
                  <span className="font-medium text-lg">Fewer objections</span>
                </div>
                <div className="p-5 bg-slate-700/50 rounded-xl flex items-center gap-4 border border-slate-600/50 hover:bg-slate-700 transition-colors">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  </div>
                  <span className="font-medium text-lg">Zero compliance surprises</span>
                </div>
                <div className="p-5 bg-slate-700/50 rounded-xl flex items-center gap-4 border border-slate-600/50 hover:bg-slate-700 transition-colors">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  </div>
                  <span className="font-medium text-lg">Confident deployment</span>
                </div>
              </div>
              <div className="mt-10 p-8 bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 rounded-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                <p className="text-blue-100 font-medium text-lg italic relative z-10">
                  "RF signals stay where they're intended—not inside people's homes or workplaces."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to ensure compliance?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start simulating your sites today and eliminate deployment risks.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold shadow-xl hover:scale-105 transition-transform hover:shadow-2xl">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
