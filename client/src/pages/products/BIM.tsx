import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Box, Layers, Database, FileCode, Share2, Settings } from "lucide-react";
import { Link } from "wouter";

export default function BIM() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Technical Focus */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
            alt="BIM Model View" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Building Information Modeling</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Structured BIM Data for Telecom
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl">
              Convert point cloud data into classified, intelligent BIM objects. SiteSee generates industry-standard IFC models compatible with major engineering software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Request Sample File <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">BIM Capabilities</h2>
            <p className="text-lg text-slate-600">Technical specifications of the BIM generation process.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Capability 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Box className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Object Classification</h3>
              <p className="text-slate-600">
                Automated recognition and tagging of structural members (legs, bracing), mounts, and ancillary equipment.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Steel sections (L-angle, pipe, solid rod)</li>
                <li>• Antenna models & dimensions</li>
                <li>• Mount types (sector frame, headframe)</li>
              </ul>
            </div>

            {/* Capability 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Level of Detail (LOD)</h3>
              <p className="text-slate-600">
                Configurable output detail based on project requirements.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• <strong>LOD 200:</strong> General geometric shape & location</li>
                <li>• <strong>LOD 300:</strong> Precise geometry & specific dimensions</li>
                <li>• <strong>LOD 350:</strong> Detailed connections & interfaces</li>
              </ul>
            </div>

            {/* Capability 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Metadata Enrichment</h3>
              <p className="text-slate-600">
                Objects are populated with non-geometric data for downstream analysis.
              </p>
              <ul className="text-sm text-slate-500 space-y-1 mt-2">
                <li>• Effective Projected Area (EPA/ESA)</li>
                <li>• Weight & material properties</li>
                <li>• Asset ID & installation date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interoperability Section - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Software Interoperability</h2>
              <p className="text-lg text-slate-300 mb-8">
                SiteSee BIM models are designed to work with your existing engineering stack. We support open standards and proprietary formats.
              </p>
              
              <div className="space-y-6">
                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCode className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-lg">Export Formats</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>• IFC 2x3 / IFC 4</div>
                    <div>• Autodesk Revit (.RVT)</div>
                    <div>• AutoCAD (.DWG, .DXF)</div>
                    <div>• SketchUp (.SKP)</div>
                  </div>
                </div>

                <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-lg">Direct Integrations</h4>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">
                    Geometry and loading data can be exported directly to structural analysis engines:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded text-xs font-mono">TNX Tower</span>
                    <span className="px-3 py-1 bg-slate-700 rounded text-xs font-mono">RISA-3D</span>
                    <span className="px-3 py-1 bg-slate-700 rounded text-xs font-mono">OpenTower</span>
                    <span className="px-3 py-1 bg-slate-700 rounded text-xs font-mono">MSTower</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/dBsBaNzZYLrvFFPM.jpg" 
                  alt="BIM Integration Diagram" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="mt-4 text-sm text-slate-400 font-mono">
                Figure 1: Automated conversion from Point Cloud to IFC Structural Model.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Management */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Component Library</h2>
            <p className="text-lg text-slate-600 mb-8">
              The platform maintains a centralized catalog of telecom equipment to ensure model accuracy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Vendor Database</h4>
                  <p className="text-slate-600 text-sm">
                    Pre-built 3D assets for major antenna and radio manufacturers (Kathrein, CommScope, Ericsson, Huawei, Nokia).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Custom Mounts</h4>
                  <p className="text-slate-600 text-sm">
                    Ability to define custom steelwork configurations and save them to your tenant library for reuse.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">RF Pattern Mapping</h4>
                  <p className="text-slate-600 text-sm">
                    Link MSI/NSMA antenna pattern files to BIM objects for downstream RF safety analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Version Control</h4>
                  <p className="text-slate-600 text-sm">
                    Track changes to the site model over time. Compare "As-Built" vs "As-Designed" states.
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
