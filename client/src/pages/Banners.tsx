import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2, Play, Pause, Volume2, VolumeX, TrendingUp, Clock, ShieldCheck, Database, Layers, Users } from 'lucide-react';

export default function Banners() {
  // Standard Roll-up Banner Size: 85cm x 200cm (approx 1:2.35 aspect ratio)
  // We'll use a fixed width of 425px and height of 1000px for the preview to simulate the ratio.

  const BannerContainer = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <div className="w-[425px] h-[1000px] bg-white shadow-2xl overflow-hidden relative flex flex-col">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Conference Banner Concepts (85cm x 200cm)</h1>
        <div className="flex flex-wrap justify-center gap-12">

          {/* Option 1: The Accelerator (Revenue Focus) */}
          <BannerContainer title="Option 1: The Accelerator">
            <div className="h-full bg-slate-950 text-white flex flex-col relative">
              {/* Background Graphic */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
              
              {/* Header */}
              <div className="p-8 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-blue-600 rounded-lg"></div> {/* Logo Placeholder */}
                  <span className="text-2xl font-bold tracking-tight">SiteSee</span>
                </div>
                <h2 className="text-5xl font-bold leading-tight mb-4">
                  Accelerate <br/>
                  <span className="text-blue-500">Revenue.</span>
                </h2>
                <p className="text-xl text-slate-400">
                  The AI-Powered Digital Twin for Tower Cos.
                </p>
              </div>

              {/* Key Metric - Centerpiece */}
              <div className="flex-grow flex flex-col justify-center px-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-6 backdrop-blur-sm">
                  <div className="text-7xl font-bold text-emerald-400 mb-2">44 Days</div>
                  <div className="text-xl text-slate-300">Faster Upgrade Approvals</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-7xl font-bold text-blue-400 mb-2">150%</div>
                  <div className="text-xl text-slate-300">Year-over-Year Growth</div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-blue-600 mt-auto">
                <div className="text-2xl font-bold mb-2">Production Scale. Not a Pilot.</div>
                <div className="text-blue-100">Trusted by 36,000+ Towers Globally</div>
                <div className="mt-6 pt-6 border-t border-blue-500 flex justify-between items-center">
                  <span className="font-mono text-lg">sitesee.ai</span>
                  <div className="h-12 w-12 bg-white p-1 rounded">
                    <div className="w-full h-full bg-slate-900"></div> {/* QR Code Placeholder */}
                  </div>
                </div>
              </div>
            </div>
          </BannerContainer>

          {/* Option 2: The Authority (Trust & Scale) */}
          <BannerContainer title="Option 2: The Authority">
            <div className="h-full bg-white text-slate-900 flex flex-col relative">
              {/* Header */}
              <div className="p-10 pt-14 bg-slate-50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 bg-slate-900 rounded-lg"></div>
                  <span className="text-2xl font-bold tracking-tight">SiteSee</span>
                </div>
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-6">
                  TRUSTED GLOBALLY
                </div>
                <h2 className="text-5xl font-bold leading-tight">
                  Production <br/>
                  Scale.
                </h2>
              </div>

              {/* Map Visual */}
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
                  alt="World Map"
                />
                {/* Pins */}
                <div className="absolute top-1/3 left-1/4 h-3 w-3 bg-blue-600 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 h-3 w-3 bg-blue-600 rounded-full"></div>
                <div className="absolute top-2/3 left-3/4 h-3 w-3 bg-blue-600 rounded-full"></div>
              </div>

              {/* Stats Grid */}
              <div className="p-8 grid grid-cols-1 gap-6 flex-grow">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-6xl font-bold text-slate-900 mb-1">36k+</div>
                  <div className="text-lg text-slate-600 font-medium">Towers & Rooftops</div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="text-6xl font-bold text-slate-900 mb-1">3,000+</div>
                  <div className="text-lg text-slate-600 font-medium">Remote Site Visits</div>
                </div>
                
                {/* Quote */}
                <div className="mt-8 bg-slate-50 p-6 rounded-2xl italic text-slate-700 text-lg">
                  "Engineering decisions, commercial conversations, customer discussions all start from a position of certainty."
                  <div className="mt-4 not-italic font-bold text-slate-900">— Nick Clarke, CEO FortySouth</div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-900 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">BOOK A DEMO</div>
                    <div className="text-2xl font-bold">sitesee.ai</div>
                  </div>
                  <div className="h-16 w-16 bg-white rounded p-1">
                     <div className="w-full h-full bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </BannerContainer>

          {/* Option 3: The Product (Visual Tech) */}
          <BannerContainer title="Option 3: The Product">
            <div className="h-full bg-slate-950 text-white flex flex-col relative overflow-hidden">
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0">
                 <img 
                  src="/home/ubuntu/upload/search_images/cOmq6v4M0lp6.png" 
                  className="w-full h-full object-cover opacity-40"
                  alt="Tower Digital Twin"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full p-8">
                <div className="flex justify-between items-start mb-12">
                   <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg"></div>
                    <span className="text-2xl font-bold">SiteSee</span>
                  </div>
                </div>

                <div className="mt-auto mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium mb-6">
                    <Zap size={14} />
                    AI-POWERED DIGITAL TWINS
                  </div>
                  <h2 className="text-5xl font-bold leading-tight mb-6">
                    See your <br/>
                    sites like <br/>
                    never before.
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    High-fidelity 3D models that drive revenue acceleration and operational efficiency.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <Layers className="text-blue-400 mb-2" />
                      <div className="font-bold">Asset Audit</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <TrendingUp className="text-emerald-400 mb-2" />
                      <div className="font-bold">Revenue</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <ShieldCheck className="text-purple-400 mb-2" />
                      <div className="font-bold">Compliance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <Users className="text-orange-400 mb-2" />
                      <div className="font-bold">Colocation</div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xl font-bold">sitesee.ai</span>
                  <div className="h-12 w-12 bg-white rounded p-1">
                     <div className="w-full h-full bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </BannerContainer>

          {/* Option 4: The Problem/Solution (Contrast) */}
          <BannerContainer title="Option 4: Problem/Solution">
            <div className="h-full bg-white flex flex-col">
              {/* Top Half: The Problem (Red/Dark) */}
              <div className="h-[45%] bg-slate-100 p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <h3 className="text-red-600 font-bold tracking-widest uppercase mb-4 relative z-10">THE REALITY</h3>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 relative z-10">
                  Infrastructure <br/>
                  is no longer <br/>
                  simple.
                </h2>
                <ul className="space-y-2 text-slate-600 relative z-10">
                  <li className="flex items-center gap-2"><span className="text-red-500">×</span> Multi-tenant complexity</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">×</span> Constant upgrade cycles</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">×</span> Zero tolerance for rework</li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-2 bg-gradient-to-r from-red-500 to-blue-600"></div>

              {/* Bottom Half: The Solution (Blue/Light) */}
              <div className="flex-grow bg-slate-900 text-white p-8 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8">
                   <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-600 rounded"></div>
                    <span className="text-xl font-bold">SiteSee</span>
                  </div>
                </div>

                <h3 className="text-blue-400 font-bold tracking-widest uppercase mb-4">THE SOLUTION</h3>
                <h2 className="text-4xl font-bold mb-6">
                  Precision at <br/>
                  Scale.
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                      <CheckCircle2 />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Automated Analysis</div>
                      <div className="text-slate-400 text-sm">No more manual spreadsheets</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                      <TrendingUp />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Revenue Acceleration</div>
                      <div className="text-slate-400 text-sm">Faster time to market</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xl font-bold">sitesee.ai</span>
                  <div className="h-12 w-12 bg-white rounded p-1">
                     <div className="w-full h-full bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </BannerContainer>

           {/* Option 5: The Ecosystem (Partners & ROI) */}
           <BannerContainer title="Option 5: The Ecosystem">
            <div className="h-full bg-slate-50 text-slate-900 flex flex-col relative">
              {/* Header */}
              <div className="p-8 bg-white shadow-sm z-10">
                <div className="flex justify-center mb-4">
                   <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg"></div>
                    <span className="text-2xl font-bold">SiteSee</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center">
                  The Digital Twin <br/> Ecosystem
                </h2>
              </div>

              {/* Central Visual - Connected Nodes */}
              <div className="flex-grow relative flex items-center justify-center p-8">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
                
                <div className="relative z-10 w-full space-y-6">
                  {/* Center Node */}
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">CORE</div>
                    <div className="text-2xl font-bold text-slate-900">SiteSee NexDT</div>
                    <div className="text-slate-500 text-sm">Single Source of Truth</div>
                  </div>

                  {/* Connecting Lines (Simulated) */}
                  <div className="h-8 w-0.5 bg-blue-200 mx-auto"></div>

                  {/* Partner Nodes */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
                      <div className="font-bold text-slate-800">FortySouth</div>
                      <div className="text-xs text-slate-500">TowerCo</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
                      <div className="font-bold text-slate-800">MNOs</div>
                      <div className="text-xs text-slate-500">Tenants</div>
                    </div>
                  </div>

                  <div className="h-8 w-0.5 bg-blue-200 mx-auto"></div>

                  {/* ROI Box */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl text-center">
                    <div className="text-sm text-blue-400 font-bold uppercase mb-2">DELIVERING</div>
                    <div className="text-4xl font-bold mb-1">30K+</div>
                    <div className="text-slate-400 text-sm mb-4">Climbs Avoided</div>
                    <div className="h-px bg-slate-800 w-full mb-4"></div>
                    <div className="text-4xl font-bold mb-1">5K+</div>
                    <div className="text-slate-400 text-sm">Tonnes CO₂ Saved</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-white border-t border-slate-200 text-center">
                <div className="text-lg font-bold text-slate-900 mb-2">Transform Your Portfolio</div>
                <div className="text-blue-600 font-bold text-xl">sitesee.ai</div>
              </div>
            </div>
          </BannerContainer>

        </div>
      </div>
    </div>
  );
}
