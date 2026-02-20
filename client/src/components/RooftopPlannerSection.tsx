import { Scan, Shield, Zap, CheckCircle2, Layers } from "lucide-react";

export default function RooftopPlannerSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <Scan className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">Rooftop Mission Planner</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-[1.1] text-slate-900">
                Autonomous Precision for <span className="text-blue-600">Complex Rooftops.</span>
              </h2>
              
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                A significant leap forward in autonomous drone operations, engineered to eliminate manual errors and deliver measurement-grade data consistency.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 p-3 bg-blue-50 rounded-xl shrink-0 h-fit">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Manual Marking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sophisticated algorithms auto-calculate planar heights with an 11m buffer and radius offsets. No more time-consuming manual measurements or geometry errors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 p-3 bg-blue-50 rounded-xl shrink-0 h-fit">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Drastically Reduced Rework</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Automated critical calculations mitigate human error, leading to a significant reduction in mission failures and costly re-flights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 p-3 bg-blue-50 rounded-xl shrink-0 h-fit">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Unparalleled Consistency</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Predictable, repeatable autonomous flight paths guarantee high-standard data quality, crucial for accurate defect detection and engineering analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-slate-700">Scalable Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-slate-700">Standardized Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/RSpIyJjkkRUeGzxQ.jpg" 
                alt="SiteSee Rooftop Mission Planner Visualization" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating UI Element */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg z-20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Flight Mode</p>
                    <p className="font-bold text-slate-900">Autonomous Scan</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Buffer Zone</span>
                    <span className="font-mono font-bold text-blue-600">11.0m</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
}
