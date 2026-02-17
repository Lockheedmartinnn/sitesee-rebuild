import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Box, Layers, Database } from "lucide-react";
import { Link } from "wouter";

export default function BIM() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
            alt="BIM Catalogue" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Building Information Modelling</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Transform Your Tower Assets with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">NexDT's BIM Catalogue</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Enhance your design accuracy and efficiency with NexDT’s evolving BIM solutions. Seamlessly integrate structured, multi-disciplinary data into the NexDT ecosystem.
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
                <Box className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Realistic Representation</h3>
              <p className="text-slate-600 leading-relaxed">
                Highly configurable representation of tower equipment and accessories, more than just 3D CAD objects.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Layers className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Drag and Drop</h3>
              <p className="text-slate-600 leading-relaxed">
                Effortlessly add and arrange components within the digital twin environment with intuitive functionality.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Database className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Dynamic Library</h3>
              <p className="text-slate-600 leading-relaxed">
                Continually updated library featuring antennas, microwave dishes, mounts, shelters, and fences.
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
                Ready Enabled for Advanced Analysis
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  The BIM equipment is ready enabled to be used with Indicative Engineering Analysis (IEA). The BIM equipment allows for Effect Sail Area (ESA) values. These can be either vendor derived to customer specific.
                </p>
                <p>
                  The BIM equipment is also ready enabled to be used with Indicative EME analysis (IEME). The radio patterns can be attached to the BIM equipment using either SiteSee vast pattern Database OR customer specific patterns can be provided in MSI format.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Personalized Library</h4>
                    <p className="text-sm text-slate-400">Tailored to specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Up-to-date Equipment</h4>
                    <p className="text-sm text-slate-400">Relevant and current</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">ESA Values</h4>
                    <p className="text-sm text-slate-400">Vendor derived or customer specific</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Radio Patterns</h4>
                    <p className="text-sm text-slate-400">SiteSee DB or MSI format</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Real-Time Design Image */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/dBsBaNzZYLrvFFPM.jpg" 
                  alt="Real-Time Design Interface" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-[1.02] origin-center"
                />
              </div>
              
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Asset Intelligence</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Our BIM solution goes beyond simple 3D visualization. It creates a semantic, queryable database of your physical assets, enabling automated analysis and reporting. Every component is tagged with metadata including manufacturer specifications, installation dates, and maintenance history.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Automated bill of materials generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Structural load calculation integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Regulatory compliance tracking</span>
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
              Start building your digital twin today.
            </h2>
            <p className="text-xl text-blue-100">
              Explore the full potential of NexDT's BIM Catalogue for your infrastructure.
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
