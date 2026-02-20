import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Activity, BarChart3, Calculator, FileCheck, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function IEA() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Technical Focus */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
            alt="Structural Analysis Model" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Structural Engineering</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Automated Structural Analysis
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl">
              Indicative Engineering Analysis (IEA) provides real-time load calculations for tower structures. Assess capacity utilization for legs, bracing, and foundations before deploying new equipment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Analysis Metrics</h2>
            <p className="text-lg text-slate-600">Key structural performance indicators calculated by the platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Capability 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Member Utilization</h3>
              <p className="text-slate-600">
                Calculates stress ratios for critical structural components under various load combinations.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Leg compression/tension capacity</li>
                <li>• Bracing member efficiency</li>
                <li>• Connection bolt shear/tension</li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Foundation Analysis</h3>
              <p className="text-slate-600">
                Evaluates base reactions against foundation capacity limits.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Overturning moment stability</li>
                <li>• Soil bearing pressure check</li>
                <li>• Anchor bolt tensile strength</li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Wind className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Deflection & Sway</h3>
              <p className="text-slate-600">
                Predicts structural displacement under wind and ice loading conditions.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Twist and sway at antenna elevations</li>
                <li>• Microwave link path alignment</li>
                <li>• Serviceability limit state checks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Engineering Workflow</h2>
              <p className="text-lg text-slate-300 mb-8">
                IEA integrates directly with the digital twin to streamline the structural assessment process.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Scenario Modeling</h4>
                    <p className="text-slate-400 text-sm">
                      Drag and drop new antennas or mounts onto the 3D model. The system automatically updates wind load areas (EPA) and weight distributions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Automated Calculation</h4>
                    <p className="text-slate-400 text-sm">
                      The solver runs linear static analysis based on defined design codes (TIA-222-H, Eurocode 3, AS 3995).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pass/Fail Reporting</h4>
                    <p className="text-slate-400 text-sm">
                      Instant feedback on structural viability. Generate a preliminary structural analysis report (PSAR) for engineering review.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/WPcvvqPaRohIAxwP.jpg" 
                  alt="Load Analysis Interface" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-800 p-3 rounded border border-slate-700">
                  <div className="text-2xl font-bold text-green-400">82%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Leg Capacity</div>
                </div>
                <div className="bg-slate-800 p-3 rounded border border-slate-700">
                  <div className="text-2xl font-bold text-yellow-400">94%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Bracing Capacity</div>
                </div>
                <div className="bg-slate-800 p-3 rounded border border-slate-700">
                  <div className="text-2xl font-bold text-green-400">0.4°</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Max Twist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Design Standards</h2>
            <p className="text-lg text-slate-600 mb-8">
              Supported international design codes and loading standards.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-slate-200 rounded text-center hover:border-blue-500 transition-colors">
                <div className="font-bold text-lg">TIA-222-H</div>
                <div className="text-sm text-slate-500">USA</div>
              </div>
              <div className="p-4 border border-slate-200 rounded text-center hover:border-blue-500 transition-colors">
                <div className="font-bold text-lg">Eurocode 3</div>
                <div className="text-sm text-slate-500">Europe</div>
              </div>
              <div className="p-4 border border-slate-200 rounded text-center hover:border-blue-500 transition-colors">
                <div className="font-bold text-lg">AS 3995</div>
                <div className="text-sm text-slate-500">Australia</div>
              </div>
              <div className="p-4 border border-slate-200 rounded text-center hover:border-blue-500 transition-colors">
                <div className="font-bold text-lg">CSA S37-18</div>
                <div className="text-sm text-slate-500">Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
