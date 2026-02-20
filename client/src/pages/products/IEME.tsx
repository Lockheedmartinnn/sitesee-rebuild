import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Radio, ShieldCheck, Zap, Activity, FileWarning, Globe } from "lucide-react";
import { Link } from "wouter";

export default function IEME() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Technical Focus */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="RF Hazard Analysis" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">RF Safety & Compliance</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Electromagnetic Emissions Modeling
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl">
              Simulate RF exposure levels and generate compliance reports based on actual equipment configurations. Visualize exclusion zones directly on the digital twin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Request Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Analysis Capabilities</h2>
            <p className="text-lg text-slate-600">Technical specifications of the IEME module.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Capability 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Field Strength Calculation</h3>
              <p className="text-slate-600">
                Computes E-field (V/m) and H-field (A/m) levels using spatially averaged antenna patterns.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Far-field & Near-field estimation</li>
                <li>• Cumulative exposure from multiple sources</li>
                <li>• Reflection & scattering factors</li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <FileWarning className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Exclusion Zone Mapping</h3>
              <p className="text-slate-600">
                Automatically generates 3D volumes representing hazard thresholds.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• <strong>Occupational:</strong> Restricted access zones</li>
                <li>• <strong>General Public:</strong> Unrestricted access limits</li>
                <li>• Configurable safety margins</li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Regulatory Standards</h3>
              <p className="text-slate-600">
                Built-in compliance profiles for major international standards.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• ICNIRP (1998, 2010, 2020)</li>
                <li>• FCC OET Bulletin 65</li>
                <li>• Safety Code 6 (Canada)</li>
                <li>• ARPANSA (Australia)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Section - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">3D Hazard Visualization</h2>
              <p className="text-lg text-slate-300 mb-8">
                Move beyond 2D contour plots. SiteSee visualizes RF plumes in the context of the physical structure, allowing for precise identification of accessible hazard areas.
              </p>
              
              <div className="space-y-6">
                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <h4 className="font-bold text-lg mb-2 text-blue-400">Volumetric Rendering</h4>
                  <p className="text-sm text-slate-300">
                    Isosurfaces are rendered directly on the digital twin, showing exactly where exposure limits are exceeded relative to climbing paths, platforms, and neighboring buildings.
                  </p>
                </div>

                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <h4 className="font-bold text-lg mb-2 text-green-400">Multi-Carrier Scenarios</h4>
                  <p className="text-sm text-slate-300">
                    Simulate cumulative effects of co-located equipment. Toggle individual sectors or frequencies to isolate sources of non-compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/JZxhoxtdYgmxgZgF.jpg" 
                  alt="RF Plume Visualization" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="mt-4 flex gap-4 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-400">Occupational Limit Exceeded</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-400">Public Limit Exceeded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Workflow */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Compliance Workflow</h2>
            <p className="text-lg text-slate-600 mb-8">
              Streamline the generation of site safety documentation.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">1</div>
                <div>
                  <h4 className="font-bold mb-1">Input Configuration</h4>
                  <p className="text-slate-600 text-sm">
                    Define antenna models, transmission power (Tx), frequency bands, and cable losses. Import data directly from the Asset Inventory.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">2</div>
                <div>
                  <h4 className="font-bold mb-1">Run Simulation</h4>
                  <p className="text-slate-600 text-sm">
                    Cloud-based computation engine calculates field strengths across the entire site volume.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">3</div>
                <div>
                  <h4 className="font-bold mb-1">Generate Deliverables</h4>
                  <p className="text-slate-600 text-sm">
                    Export standard Site Safety Plans (SSP), EME compliance certificates, and signage placement recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
