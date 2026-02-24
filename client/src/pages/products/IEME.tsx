import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, Building2, Activity, Users, FileText, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function IEME() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/jXFHjHGtYTRgBdVA.mp4" type="video/mp4" />
          </video>
          {/* Gradient removed for transparency */}
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">EME Consistency Analysis</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Helping you with EME follows <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Before Installation</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              You can't move forward with upgrades, colocation, or site commissioning if you're not ICNIRP consistent. SiteSee's EME Analysis eliminates the bottleneck by generating consistent exclusion zones digitally, before site access, before climbs, before delays.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Book Technical Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                Download Sample IEA Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Regulatory Reality Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video Overlay Section - Moved to Left */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group order-2 lg:order-1">
              {/* Video Background - Rotated/Horizontal */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/jXFHjHGtYTRgBdVA.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Overlay content removed as requested */}
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The Regulatory Reality: <br/>
                  <span className="text-red-600">No Compliance = No Approval</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  ACMA, state regulators, local councils, and building owners all require demonstrated consistency with ICNIRP RF exposure limits before permitting new installations, upgrades, or tenant colocations.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Traditional EME Friction
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Site visit dependency:</strong> Requires physical access, often with climbers, adding weeks to timelines.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Post-installation validation:</strong> Problems discovered after equipment is ordered and installed.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span><strong>Manual calculation errors:</strong> Spreadsheet-based assessments prone to input errors and conservative over-margins.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consistency Framework Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digital EME Modeling to ARPANSA S-1 & ICNIRP 2020
            </h2>
            <p className="text-lg text-slate-400">
              SiteSee's EME Analysis generates Indicative Electromagnetic Energy (IEA) Reports that are consistent with the strictest Australian and international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Regulatory Standards</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>ARPANSA RPS S-1 (2021) Table 4</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>ICNIRP 2020 Guidelines</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>100 kHz to 300 GHz Range</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exposure Limits</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>General Public:</strong> 0.08 W/kg Whole-Body SAR</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Occupational:</strong> 0.4 W/kg Whole-Body SAR</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>6-minute averaging time</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusion Zones</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 shrink-0 mt-1" />
                  <span><strong>Red (Occupational):</strong> Restricted to trained personnel only</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0 mt-1" />
                  <span><strong>Orange (General Public):</strong> Restricted to RF workers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Calculated per antenna specs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technical Advantages
            </h2>
            <p className="text-lg text-slate-600">
              Why leading tower companies choose SiteSee for EME consistency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">ARPANSA S-1 Consistent</h3>
              <p className="text-slate-600 mb-6">
                SiteSee's EME Analysis generates Indicative Electromagnetic Energy (IEA) Reports that are consistent with the strictest Australian and international standards.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">ARPANSA S-1 (2021)</div>
                  <div className="text-sm text-slate-500">Fully Consistent Methodology</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Multi-Tenant Modeling</h3>
              <p className="text-slate-600 mb-6">
                Accurately model cumulative EME from multiple carriers on shared infrastructure. Identify hot spots where combined emissions exceed limits, even if individual carriers are consistent.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Cumulative Analysis</div>
                  <div className="text-sm text-slate-500">Total Site Exposure</div>
                </div>
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
              Why This Matters to Your Deployment Timeline
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Timeline */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 opacity-70">
                <h3 className="text-xl font-bold text-slate-500 mb-6">Traditional EME Assessment</h3>
                <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Week 0</div>
                    <div className="text-sm text-slate-500">Request site access</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Week 2-3</div>
                    <div className="text-sm text-slate-500">Climber audit scheduled</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Week 4</div>
                    <div className="text-sm text-slate-500">Manual EME calculation</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white" />
                    <div className="font-bold text-slate-700">Month 2</div>
                    <div className="text-sm text-slate-500">Approval received</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                  <div className="text-3xl font-bold text-slate-400">2 Months</div>
                  <div className="text-sm text-slate-500">Total Time</div>
                </div>
              </div>

              {/* SiteSee Timeline */}
              <div className="p-8 rounded-2xl border-2 border-blue-100 bg-blue-50/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  6X FASTER
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-6">SiteSee Digital EME</h3>
                <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-200">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Day 0</div>
                    <div className="text-sm text-blue-700">Request Site Capture</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Day 1</div>
                    <div className="text-sm text-blue-700">Input RF parameters</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Day 2</div>
                    <div className="text-sm text-blue-700">IEA Report generated</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                    <div className="font-bold text-blue-900">Day 5</div>
                    <div className="text-sm text-blue-700">Approval received</div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-blue-200 text-center">
                  <div className="text-3xl font-bold text-blue-600">5 Days</div>
                  <div className="text-sm text-blue-700">Total Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ensure Consistency Before You Build
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Stop risking delays and rework. Validate EME consistency digitally with SiteSee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full font-bold">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white text-white hover:bg-white hover:text-blue-600 font-bold">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
