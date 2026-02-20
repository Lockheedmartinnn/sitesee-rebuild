import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Plane, Map, Crosshair, Smartphone, Cloud, Camera } from "lucide-react";
import { Link } from "wouter";
import RooftopPlannerSection from "@/components/RooftopPlannerSection";

export default function Capture() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Technical Focus */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="Drone Flight Planning" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Data Acquisition</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Autonomous Flight Planning
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl">
              Standardize drone data collection with the Pilot Companion App. Execute pre-programmed flight missions optimized for vertical infrastructure photogrammetry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Download App <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Flight Modes</h2>
            <p className="text-lg text-slate-600">Specialized capture patterns for different asset types.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Capability 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Tower Scan</h3>
              <p className="text-slate-600">
                Helical flight path orbiting the structure at multiple elevations.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Constant GSD (Ground Sampling Distance)</li>
                <li>• 80% overlap / 80% sidelap</li>
                <li>• Gimbal pitch automation</li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Rooftop Grid</h3>
              <p className="text-slate-600">
                Nadir and oblique grid patterns for flat surfaces and building facades.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Terrain following capability</li>
                <li>• Cross-hatch option for complex geometry</li>
                <li>• Boundary definition via KML import</li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Crosshair className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Detail Inspection</h3>
              <p className="text-slate-600">
                Manual intervention mode for high-zoom capture of specific components.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• POI (Point of Interest) locking</li>
                <li>• Live video feed transmission</li>
                <li>• Metadata tagging in-flight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Compatibility - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hardware Compatibility</h2>
              <p className="text-lg text-slate-300 mb-8">
                The Pilot Companion App supports industry-standard enterprise drone platforms.
              </p>
              
              <div className="space-y-6">
                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <h4 className="font-bold text-lg mb-2 text-blue-400">DJI Enterprise</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                    <div>• Mavic 3 Enterprise (M3E/M3T)</div>
                    <div>• Matrice 300/350 RTK</div>
                    <div>• Matrice 30 Series</div>
                    <div>• Phantom 4 RTK</div>
                  </div>
                </div>

                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <h4 className="font-bold text-lg mb-2 text-green-400">Controller Support</h4>
                  <p className="text-sm text-slate-300">
                    Native Android application runs directly on DJI RC Pro and RC Plus controllers. No external tablet required.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
                  alt="Pilot App Interface" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Planner Component */}
      <RooftopPlannerSection />

      {/* Workflow Steps */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Field Workflow</h2>
            <p className="text-lg text-slate-600 mb-8">
              From site arrival to data upload.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">1</div>
                <div>
                  <h4 className="font-bold mb-1">Mission Sync</h4>
                  <p className="text-slate-600 text-sm">
                    Download flight plans assigned to the pilot from the cloud dashboard.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">2</div>
                <div>
                  <h4 className="font-bold mb-1">Pre-Flight Check</h4>
                  <p className="text-slate-600 text-sm">
                    Automated system status verification (battery, GPS, compass, airspace restrictions).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 font-bold text-blue-600">3</div>
                <div>
                  <h4 className="font-bold mb-1">Execute & Upload</h4>
                  <p className="text-slate-600 text-sm">
                    Monitor autonomous capture. Upon landing, images are validated and uploaded directly to NexDT for processing.
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
