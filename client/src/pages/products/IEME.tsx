import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Radio, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function IEME() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="IEME Analysis" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">EME/RF Hazard Assessment</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              EME/RF Hazard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Assessment</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Integrated into the NexDT ecosystem to produce indicative distribution of electromagnetic fields (EME) for effortless compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href="/contact" className="h-14 px-8 text-base bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Effortless Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Eliminate the complexities of EME compliance with intuitive design capabilities within the nexDT framework.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Radio className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Precise Distributions</h3>
              <p className="text-slate-600 leading-relaxed">
                Delivers precise distributions of electromagnetic fields (EME) for accurate hazard assessment.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Zap className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Real-time Visualization</h3>
              <p className="text-slate-600 leading-relaxed">
                Enable precise, real-time visualization of electromagnetic emissions for seamless compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[1.1]">
                Enhance EME Compliance with Digital Twins
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Revolutionise your cell tower design process with the power of digital twins. Our cutting-edge technology enables precise, real-time visualization of electromagnetic emissions, allowing for seamless EME compliance.
                </p>
                <p>
                  By simulating various design scenarios digitally, you can quickly identify and address potential compliance issues before physical deployment. This advanced approach accelerates the design cycle, ensures regulatory adherence, and minimizes risks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Predict EME Plumes</h4>
                    <p className="text-sm text-slate-400">Unparalleled accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Manage Exclusion Zones</h4>
                    <p className="text-sm text-slate-400">Optimize safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Refine Designs</h4>
                    <p className="text-sm text-slate-400">For optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">BIM Integration</h4>
                    <p className="text-sm text-slate-400">Use BIM catalogue for verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Compliance Image */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/JZxhoxtdYgmxgZgF.jpg" 
                  alt="Compliance and ICNIRP Analysis Interface" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-[1.02] origin-center"
                />
              </div>
              
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Proactive Risk Management</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Traditional EME compliance is reactive and often requires costly site visits. Our digital twin approach allows you to model electromagnetic fields before any equipment is installed. By visualizing exclusion zones and potential hazards in 3D, you can optimize antenna placement for both performance and safety, ensuring full compliance with ICNIRP guidelines and local regulations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Visual exclusion zone mapping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Multi-carrier interference analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Automated compliance reporting</span>
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
              Ensure safety and compliance with ease.
            </h2>
            <p className="text-xl text-blue-100">
              Leverage SiteSee IEME for precise hazard assessment and regulatory adherence.
            </p>
            <a href="/contact" className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
