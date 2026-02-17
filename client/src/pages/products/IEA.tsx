import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Activity, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function IEA() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
            alt="IEA Analysis" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Predictive Load Analysis</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Indicative Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Analysis (IEA)</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Validate design changes fast and accurately within the digital twin. Facilitate cell tower load analysis through drag and drop scenarios.
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
                <Activity className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Structure Load</h3>
              <p className="text-slate-600 leading-relaxed">
                Maximum utilisation of the leg, bracing or pole where applicable in percent (%).
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <BarChart3 className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Footing Load</h3>
              <p className="text-slate-600 leading-relaxed">
                Maximum utilisation of the footing in bending/shear, or hold down bolts, or overturning ratio where applicable.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Wind className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Tip Rotation</h3>
              <p className="text-slate-600 leading-relaxed">
                Rotation of the pole at a defined height above ground level in degrees (°).
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
                Streamline Tower Upgrades with NexDT
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Our process ensures that the engineering model, maintained by certified professionals, is consistently used for tower upgrade sign-offs. The model is exported to the NexDT environment, where users can modify tower configurations and accurately predict structural loads.
                </p>
                <p>
                  This streamlined workflow helps determine if changes require engineering modifications. Allowing users to rapidly prototype design scenario submit their design revisions. This approach ensures that all modifications are thoroughly vetted, maintaining high standards of accuracy and safety throughout the upgrade process.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Rapid Prototyping</h4>
                    <p className="text-sm text-slate-400">Test design scenarios instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Accurate Prediction</h4>
                    <p className="text-sm text-slate-400">Reliable structural load data</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Safety First</h4>
                    <p className="text-sm text-slate-400">Thoroughly vetted modifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Certified Models</h4>
                    <p className="text-sm text-slate-400">Maintained by professionals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Lifecycle Management Image */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/WPcvvqPaRohIAxwP.jpg" 
                  alt="Lifecycle Management Interface" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Engineering-Grade Accuracy</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  IEA bridges the gap between digital twin visualization and structural engineering. Unlike simple visual models, our platform integrates with industry-standard engineering tools to provide instant feedback on structural capacity. This allows engineering teams to assess the viability of new equipment installations in minutes rather than weeks, significantly reducing the time-to-market for network upgrades.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Instant structural capacity checks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Wind load simulation integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-slate-300">Mount analysis automation</span>
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
              Ready to optimize your engineering workflows?
            </h2>
            <p className="text-xl text-blue-100">
              Join leading tower companies using SiteSee IEA for faster, safer upgrades.
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
