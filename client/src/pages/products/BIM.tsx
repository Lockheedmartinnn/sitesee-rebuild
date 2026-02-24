import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Box, Layers, Database, AlertTriangle, Clock, Zap, ShieldCheck, FileText, Search, Settings, RefreshCw, Globe, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function BIM() {
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
      <section className="py-24 bg-white">
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

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Current Friction
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <FileText className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                    <span><strong>Vendor PDFs:</strong> Specifications buried in 50-page documents, not machine-readable.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Box className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                    <span><strong>Legacy CAD libraries:</strong> 2D drawings or basic 3D blocks with no embedded technical data.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
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
              <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Data Requirements</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Activity className="w-4 h-4" /> For Structural Analysis (IEA)</h4>
                    <ul className="text-sm text-slate-400 space-y-1 ml-6 list-disc">
                      <li>Physical dimensions (H x W x D)</li>
                      <li>Weight and center of gravity</li>
                      <li>Effective Sail Area (ESA)</li>
                      <li>Wind load coefficients</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Zap className="w-4 h-4" /> For EME Assessment</h4>
                    <ul className="text-sm text-slate-400 space-y-1 ml-6 list-disc">
                      <li>Manufacturer and model number</li>
                      <li>Frequency bands & channels</li>
                      <li>Antenna gain & radiation patterns</li>
                      <li>Transmit power and EIRP</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Settings className="w-4 h-4" /> For Design Coordination</h4>
                    <ul className="text-sm text-slate-400 space-y-1 ml-6 list-disc">
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
      <section className="py-24 bg-slate-50">
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
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
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/QehCaTWswdxBeCUo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                  <div className="text-white font-bold text-lg mb-2">Drag-and-Drop Placement</div>
                  <p className="text-slate-300 text-sm">Design tower modifications directly in the digital twin environment.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Select Equipment</h3>
                    <p className="text-slate-400 text-sm">Browse by manufacturer, model, or specs. Filter by gain, ESA, or frequency.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Drag into Digital Twin</h3>
                    <p className="text-slate-400 text-sm">Place at precise 3D coordinates. Snap to mounting positions or place freeform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adjust Orientation</h3>
                    <p className="text-slate-400 text-sm">Set azimuth, tilt, and roll with numeric precision or visual manipulation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Data Automatically Attached</h3>
                    <p className="text-slate-400 text-sm">ESA, weight, and patterns flow into IEA and EME tools automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Sections */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* IEA Integration */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integration with IEA</h3>
              <p className="text-slate-600 mb-6">
                Every BIM component includes Effective Sail Area (ESA) data ready for Indicative Engineering Analysis.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Vendor-Derived ESA</h4>
                  <p className="text-sm text-slate-500">Sourced from technical specs, wind tunnel data, and standards (AS/NZS 7000, TIA-222).</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Customer-Specific ESA</h4>
                  <p className="text-sm text-slate-500">Override vendor defaults with your own validated values or site-specific calculations.</p>
                </div>
              </div>
            </div>

            {/* EME Integration */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integration with EME</h3>
              <p className="text-slate-600 mb-6">
                Every antenna includes radiation pattern data ready for Indicative EME Assessment.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">SiteSee Pattern Database</h4>
                  <p className="text-sm text-slate-500">Extensive library from national databases and manufacturers in standard formats.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Customer-Specific Patterns</h4>
                  <p className="text-sm text-slate-500">Upload custom MSI patterns for proprietary or modified equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Library & Workflow Comparison */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Personalized BIM Library</h2>
              <p className="text-slate-400 mb-8">
                Each customer benefits from a tailored BIM library specific to their infrastructure portfolio, ensuring consistency across all users.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span><strong>Standard Manufacturers:</strong> Equipment you regularly deploy.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span><strong>Legacy Equipment:</strong> Older models for as-built documentation.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span><strong>Custom Components:</strong> Proprietary mounts and brackets.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span><strong>Regional Variants:</strong> Specific to your operating regions.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Real Design Workflow</h2>
              <div className="space-y-6">
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                  <h3 className="font-bold text-red-400 mb-2 flex items-center gap-2"><Clock className="w-5 h-5" /> Traditional Modeling</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Manual search for specs → Download PDFs → Extract data → Enter into spreadsheets → Find CAD blocks → Scale manually → Convert patterns.
                  </p>
                  <div className="font-bold text-white">Time: 2-4 hours per change. High error risk.</div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                  <h3 className="font-bold text-green-400 mb-2 flex items-center gap-2"><Zap className="w-5 h-5" /> NexDT BIM Workflow</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Drag antenna → Set orientation → IEA uses embedded ESA → EME uses embedded pattern → Conflicts visible immediately.
                  </p>
                  <div className="font-bold text-white">Time: 5-10 minutes. Zero manual data entry.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technical Advantages
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="font-bold text-slate-900 mb-2">Measurement-Grade</div>
              <p className="text-sm text-slate-600">±2mm dimensional tolerance, ±1% ESA accuracy, ±0.5 dB gain accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="font-bold text-slate-900 mb-2">Multi-Disciplinary</div>
              <p className="text-sm text-slate-600">Same component used by Structural, RF, CAD, and Procurement teams.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="font-bold text-slate-900 mb-2">Format Compatibility</div>
              <p className="text-sm text-slate-600">Exports to IFC, Native CAD, JSON/XML, and PDF 3D.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="font-bold text-slate-900 mb-2">Continuous Evolution</div>
              <p className="text-sm text-slate-600">Quarterly updates with new releases and specification corrections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Get Started with BIM-Enabled Design
            </h2>
            <p className="text-xl text-blue-100">
              Stop hunting through vendor PDFs and outdated CAD libraries. Start designing with accurate, analysis-ready equipment data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 border-0 font-bold rounded-full shadow-lg">
                  Request Demo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-blue-400 text-white hover:bg-blue-700 rounded-full">
                Discuss Custom Library
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
