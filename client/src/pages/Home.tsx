import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, BarChart3, Globe2 } from "lucide-react";
import { Link } from "wouter";
import CustomerMap from "@/components/CustomerMap";
import FlightsCounter from "@/components/FlightsCounter";
import { Testimonials } from "@/components/Testimonials";
import { VideoTestimonial } from "@/components/VideoTestimonial";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Direct & Functional */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
              alt="Drone inspecting a telecom tower" 
              className="w-full h-full object-cover opacity-50"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Enterprise Digital Twin Platform</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
              Complete digital records for <span className="text-blue-400">telecom assets.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              SiteSee provides a unified platform for drone-based inspection, 3D modeling, and automated structural analysis of cell towers and rooftops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="/contact" className="h-14 px-8 text-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-md inline-flex items-center gap-2 transition-colors">
                Request a Demo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/products/nexdt" className="h-14 px-8 text-lg bg-transparent border border-slate-600 text-white hover:bg-white hover:text-black transition-colors rounded-md font-semibold inline-flex items-center gap-2">
                View Product Specs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Flights Counter Section */}
      <FlightsCounter />

      {/* Core Capabilities - Grid Layout */}
      <section className="py-24 bg-white text-black">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-slate-600">
              A suite of tools designed for engineering, operations, and asset management teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3D Digital Twins</h3>
              <p className="text-slate-600 mb-4">
                High-resolution photogrammetry models accessible via web browser. Measure distances, areas, and angles with sub-centimeter accuracy.
              </p>
              <Link href="/products/nexdt" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Capability 2 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">BIM & CAD Export</h3>
              <p className="text-slate-600 mb-4">
                Convert point clouds into classified BIM models. Export to standard formats like IFC, DXF, and DWG for direct integration with engineering software.
              </p>
              <Link href="/products/bim" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Capability 3 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">RF Safety Analysis</h3>
              <p className="text-slate-600 mb-4">
                Simulate electromagnetic field (EMF) emissions based on antenna configurations. Generate compliance reports and exclusion zone maps.
              </p>
              <Link href="/products/ieme" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Capability 4 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Structural Analysis</h3>
              <p className="text-slate-600 mb-4">
                Automated load calculations for tower structures. Assess capacity for new equipment installation and identify structural reinforcements needed.
              </p>
              <Link href="/products/iea" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Capability 5 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Asset Inventory</h3>
              <p className="text-slate-600 mb-4">
                AI-driven detection of installed equipment. Automatically catalog antennas, RRUs, and mounts with model numbers and azimuth/tilt data.
              </p>
              <Link href="/products/nexdt" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>

            {/* Capability 6 */}
            <div className="p-8 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Drone Operations</h3>
              <p className="text-slate-600 mb-4">
                Flight planning and management software. Ensure consistent data capture quality across different pilots and drone hardware.
              </p>
              <Link href="/products/capture" className="text-blue-600 font-semibold hover:underline">Learn more &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Dark Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Specifications</h2>
              <div className="space-y-6">
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Data Accuracy</h4>
                  <p className="text-slate-300">Absolute position accuracy: &lt;5cm (with RTK/PPK). Relative measurement accuracy: &lt;1cm.</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Supported Formats</h4>
                  <p className="text-slate-300">Import: JPG, TIFF, LAS, LAZ. Export: OBJ, FBX, DXF, IFC, PDF, CSV.</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Processing Time</h4>
                  <p className="text-slate-300">Standard turnaround: 24-48 hours for full 3D reconstruction and AI analysis.</p>
                </div>
                <div className="border-b border-slate-700 pb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Security</h4>
                  <p className="text-slate-300">ISO 27001 certified. Data hosted on AWS (regional options available). End-to-end encryption.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
               <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
                  alt="Technical view of tower structure" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm">
                  <p className="font-mono text-sm text-green-400">System Status: Operational</p>
                  <p className="font-mono text-xs text-slate-400 mt-1">Last updated: 2024-05-20 14:30 UTC</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <VideoTestimonial />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Global Customer Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Global Deployment</h2>
            <p className="text-xl text-slate-600">
              Operational in 25+ countries. Supporting major MNOs and TowerCos.
            </p>
          </div>

          <CustomerMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-700 text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Start your pilot program.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Evaluate the SiteSee platform with a proof of concept on your own assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Layers(props: any) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}
