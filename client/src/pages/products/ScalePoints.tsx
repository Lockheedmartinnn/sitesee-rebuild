import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, CheckCircle2, Shield, Zap, Target, Scan, Box } from "lucide-react";
import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";

export default function ScalePoints() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="ScalePoint" 
        subtitle="Physical Reference System for Photogrammetry"
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/wLMJzVLQwtXPiNdV.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              Order ScalePoints <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </PageHeader>

      {/* Technical Overview */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                Dimensional Verification
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ScalePoint is a calibrated physical marker system designed to validate the accuracy of 3D photogrammetry models. It provides a known ground truth measurement within the capture scene, independent of GPS or RTK data.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-slate-100 rounded-lg">
                    <Ruler className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Calibrated Length</h4>
                    <p className="text-sm text-slate-500">Manufactured to {"<"}0.5mm tolerance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-slate-100 rounded-lg">
                    <Scan className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Auto-Detection</h4>
                    <p className="text-sm text-slate-500">Machine vision recognition.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/wLMJzVLQwtXPiNdV.jpg" 
                  alt="ScalePoint Marker" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">System Specifications</h2>
            <p className="text-lg text-slate-600">Physical and operational parameters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="mb-6 p-4 bg-blue-50 rounded-lg w-fit">
                <Box className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Physical Dimensions</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>Length:</strong> 1000mm (±0.5mm)</li>
                <li>• <strong>Material:</strong> Anodized Aluminum</li>
                <li>• <strong>Weight:</strong> 1.2kg</li>
                <li>• <strong>Pattern:</strong> High-contrast ArUco markers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="mb-6 p-4 bg-blue-50 rounded-lg w-fit">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Deployment</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>Placement:</strong> Ground level or rooftop surface</li>
                <li>• <strong>Visibility:</strong> Must be visible in {">"}5 images</li>
                <li>• <strong>Setup Time:</strong> {"<"}30 seconds</li>
                <li>• <strong>Durability:</strong> Weather-resistant coating</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="mb-6 p-4 bg-blue-50 rounded-lg w-fit">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Processing</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• <strong>Detection:</strong> Automated during photogrammetry</li>
                <li>• <strong>Correction:</strong> Auto-scales point cloud</li>
                <li>• <strong>Validation:</strong> Generates RMSE accuracy report</li>
                <li>• <strong>Compatibility:</strong> Works with any drone camera</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Dark */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Application Scenarios
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">GPS-Denied Environments</h4>
                    <p className="text-slate-400 text-sm">
                      Essential for accurate scaling in areas with poor satellite reception, such as urban canyons or indoor/under-canopy sites.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mount Mapping</h4>
                    <p className="text-slate-400 text-sm">
                      Provides the sub-centimeter accuracy required to measure bolt hole patterns and steel member dimensions for fabrication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Rooftop Analysis</h4>
                    <p className="text-slate-400 text-sm">
                      Verifies parapet heights and available floor space for equipment placement where relative accuracy is critical.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-6">Accuracy Verification</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                ScalePoint serves as an independent audit tool. By comparing the digital model's measurement of the ScalePoint against its known physical length, engineers can mathematically verify the model's scale error.
              </p>
              <div className="bg-black/30 p-4 rounded border border-slate-600 font-mono text-xs text-green-400">
                {">"} DETECTED_MARKER_ID: SP-042<br/>
                {">"} KNOWN_LENGTH: 1000.00mm<br/>
                {">"} MEASURED_LENGTH: 999.82mm<br/>
                {">"} SCALE_ERROR: 0.018%<br/>
                {">"} STATUS: PASS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ensure Model Integrity</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Add ScalePoints to your standard equipment kit.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg hover:scale-105 transition-transform">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
