import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Plane, Map, Crosshair } from "lucide-react";
import { Link } from "wouter";
import RooftopPlannerSection from "@/components/RooftopPlannerSection";

export default function Capture() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="DroneSee Mission Planner" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">DroneSee Mission Planner</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Autonomous & Repeatable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Image Capture</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Our specialised mission planner makes drone capture simple and repeatable ensuring high quality digital deliverables.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href="/contact" className="h-14 px-8 text-base bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <RooftopPlannerSection />

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Plane className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Autonomous Flight</h3>
              <p className="text-slate-600 leading-relaxed">
                Automated flight paths ensure consistent, high-quality data capture every time, reducing pilot error.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Map className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Repeatable Missions</h3>
              <p className="text-slate-600 leading-relaxed">
                Save and reuse flight plans for periodic inspections, ensuring perfectly aligned historical data comparisons.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Crosshair className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Precision Capture</h3>
              <p className="text-slate-600 leading-relaxed">
                Optimized for vertical infrastructure, capturing every angle and detail required for high-fidelity 3D modeling.
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
              Capture data with confidence.
            </h2>
            <p className="text-xl text-blue-100">
              Streamline your drone operations with DroneSee Mission Planner.
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
