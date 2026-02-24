import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Box, Layers, Database, AlertTriangle, Clock, Zap, ShieldCheck, FileText, Search, Settings, RefreshCw, Globe, BarChart3, Activity } from "lucide-react";
import { Link } from "wouter";

export default function BIM() {
  return (
    <div className="flex flex-col bg-white text-slate-900">
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
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/QehCaTWswdxBeCUo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">BIM Catalogue</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Stop designing blind. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Start designing with data.</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Every modification requires accurate equipment specifications. NexDT's BIM Catalogue puts measurement-grade data directly into your digital twin—ready for IEA, EME, and design approval.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                Explore BIM Library
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Equipment Data Problem */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The Equipment Data Problem
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every tower modification requires technical specifications for every piece of equipment. But data is scattered, outdated, and inconsistent.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Current Friction
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <FileText className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                    <span><strong>Vendor PDFs:</strong> Specifications buried in 50-page documents, not machine-readable.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Box className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                    <span><strong>Legacy CAD libraries:</strong> 2D drawings or basic 3D blocks with no embedded technical data.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <Database className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                    <span><strong>Spreadsheet chaos:</strong> ESA values maintained in disconnected Excel files, versions out of sync.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg font-medium text-slate-900 border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                Result: Design delays. Assessment errors. Rework when equipment doesn't fit.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-8 rounded-2xl text-slate-900 shadow-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-6 text-blue-600">Data Requirements</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Activity className="w-4 h-4" /> For Structural Analysis (IEA)</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6 list-disc">
                      <li>Physical dimensions (H x W x D)</li>
                      <li>Weight and center of gravity</li>
                      <li>Effective Sail Area (ESA)</li>
                      <li>Wind load coefficients</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Zap className="w-4 h-4" /> For EME Assessment</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6 list-disc">
                      <li>Manufacturer and model number</li>
                      <li>Frequency bands & channels</li>
                      <li>Antenna gain & radiation patterns</li>
                      <li>Transmit power and EIRP</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Settings className="w-4 h-4" /> For Design Coordination</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-6 list-disc">
                      <li>Mounting requirements</li>
                      <li>Cable entry locations</li>
                      <li>Clearance requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM-Enabled Equipment Library */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              BIM-Enabled Equipment Library
            </h2>
            <p className="text-lg text-slate-600">
              NexDT's BIM Catalogue is a continuously updated library of tower equipment with complete technical specifications embedded in each component. Not just 3D geometry—structured, multi-disciplinary data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">RF Equipment</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Panel antennas (Nokia, Ericsson, Huawei, etc.)</li>
                <li>• Microwave dishes and backhaul antennas</li>
                <li>• RRUs and remote radio heads</li>
                <li>• Combiners, TMAs, and RF equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mounting Hardware</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Antenna mounts and brackets</li>
                <li>• Pipe mounts and clamps</li>
                <li>• Azimuth and tilt adjustment mechanisms</li>
                <li>• Universal mounting kits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Support Infrastructure</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Equipment shelters and cabinets</li>
                <li>• Cable trays and ladder systems</li>
                <li>• Platforms and walkways</li>
                <li>• Fencing and perimeter security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Drag-and-Drop Workflow */}
      <section className="py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/QehCaTWswdxBeCUo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg">
                  <div className="text-slate-900 font-bold text-lg mb-2">Drag-and-Drop Placement</div>
                  <p className="text-slate-600 text-sm">Design tower modifications directly in the digital twin environment.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Select Equipment",
                    desc: "Browse by manufacturer, model, or specs. Filter by gain, ESA, or frequency."
                  },
                  {
                    step: "2",
                    title: "Drag into Digital Twin",
                    desc: "Place at precise 3D coordinates. Snap to mounting positions or place freeform."
                  },
                  {
                    step: "3",
                    title: "Adjust Orientation",
                    desc: "Set azimuth, tilt, and roll with numeric precision or visual manipulation."
                  },
                  {
                    step: "4",
                    title: "Data Automatically Attached",
                    desc: "ESA, weight, and patterns flow into IEA and EME tools automatically."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to streamline your design process?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Get access to the most comprehensive BIM library for telecom infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="h-16 px-12 text-xl bg-white text-blue-600 hover:bg-blue-50 border-0 font-bold rounded-full shadow-xl">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
