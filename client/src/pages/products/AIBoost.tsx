import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Cpu, BarChart } from "lucide-react";
import { Link } from "wouter";

export default function AIBoost() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/digital-interface-clean.jpg" 
            alt="AI Boost Engine" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">AI Boost Engine</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Digital Twin Performance</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Accelerate data processing and enhance model fidelity with our proprietary AI Boost Engine.
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
                <Zap className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Rapid Processing</h3>
              <p className="text-slate-600 leading-relaxed">
                Drastically reduce turnaround times for 3D model generation and data analysis.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Cpu className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Enhanced Fidelity</h3>
              <p className="text-slate-600 leading-relaxed">
                Improve the visual quality and geometric accuracy of your digital twins using advanced AI upscaling.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <BarChart className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Scalable Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                Handle massive datasets and enterprise-scale portfolios without compromising on speed or quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Boost your capabilities today.
            </h2>
            <p className="text-xl text-blue-100">
              Unlock the full speed and precision of your digital twin ecosystem.
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
