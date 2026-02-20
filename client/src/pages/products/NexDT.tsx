import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, ShieldCheck, Layers, FileText, Ruler, Database } from "lucide-react";

export default function NexDT() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Product Focused */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="NexDT Interface"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Product Specification</span>
            </div>

            <div className="mb-8">
              <img 
                src="/images/nexdt-logo.png" 
                alt="NexDT" 
                className="h-24 md:h-32 w-auto object-contain brightness-0 invert"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Browser-based 3D Digital Twin Platform
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl">
              NexDT is a web application for visualizing, measuring, and managing telecom infrastructure assets. It processes drone imagery into high-fidelity 3D models and provides a suite of engineering-grade tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Request Access <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features - Technical Grid */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Functionality</h2>
            <p className="text-lg text-slate-600">Key capabilities of the NexDT web interface.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Ruler className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Precision Measurement</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Linear distance (XYZ)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Surface area & volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Antenna azimuth, tilt, and roll</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Ground elevation profiles</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Asset Inventory</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>AI-detected equipment list</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Model number & manufacturer ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mount type classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Port availability status</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold">Reporting & Export</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>PDF Audit Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Excel/CSV Asset Registers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>High-res Orthomosaics (GeoTIFF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Point Cloud (LAS/LAZ)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-white">System Specifications</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-6 text-slate-400 font-medium w-1/3">Category</th>
                  <th className="py-4 px-6 text-slate-400 font-medium">Specification</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">Browser Support</td>
                  <td className="py-4 px-6">Chrome (v90+), Firefox (v88+), Safari (v14+), Edge (v90+)</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">3D Engine</td>
                  <td className="py-4 px-6">WebGL 2.0 based renderer with LOD (Level of Detail) streaming</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">Model Resolution</td>
                  <td className="py-4 px-6">Up to 1mm/pixel GSD (Ground Sampling Distance)</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">Coordinate Systems</td>
                  <td className="py-4 px-6">WGS84, UTM, State Plane, and custom local grids</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">Data Hosting</td>
                  <td className="py-4 px-6">AWS S3 (Encrypted at rest), CloudFront CDN</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="py-4 px-6 font-semibold">API Access</td>
                  <td className="py-4 px-6">RESTful API for asset data retrieval and integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Workflow Integration</h2>
              <p className="text-lg text-slate-600 mb-8">
                NexDT is designed to fit into existing engineering and asset management workflows.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Asset Management Systems</h4>
                    <p className="text-slate-600">Direct integration with Siterra, Tarantula, and Salesforce via API.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Engineering Software</h4>
                    <p className="text-slate-600">Export geometry to TNX Tower, RISA-3D, and PLS-CADD.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">RF Planning Tools</h4>
                    <p className="text-slate-600">Compatible with Atoll, Planet, and iBwave formats.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-100 p-8 rounded-xl border border-slate-200">
              <h3 className="font-bold text-xl mb-6">Supported File Types</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <span className="block font-mono text-sm text-slate-500">3D Model</span>
                  <span className="font-bold">.OBJ, .FBX, .GLB</span>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <span className="block font-mono text-sm text-slate-500">Point Cloud</span>
                  <span className="font-bold">.LAS, .LAZ, .E57</span>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <span className="block font-mono text-sm text-slate-500">CAD/BIM</span>
                  <span className="font-bold">.DXF, .DWG, .IFC</span>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <span className="block font-mono text-sm text-slate-500">Geospatial</span>
                  <span className="font-bold">.KML, .SHP, .GeoJSON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
