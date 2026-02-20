import { CheckCircle2, Ruler, Zap, ShieldCheck } from "lucide-react";

export default function ScalePointSection() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">SiteSee ScalePoint</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
            Precision Scaling. <span className="text-blue-500">Anywhere.</span> Every Time.
          </h2>
          
          <p className="text-2xl text-slate-400 font-light leading-relaxed">
            In telecommunications infrastructure, accuracy is not optional. Every mount, antenna, dish and clearance decision depends on scale being right.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-10">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">SiteSee ScalePoint</strong> is our proprietary physical scaling reference, purpose-built for wireless telecom towers and rooftops. It ensures every NexDT digital twin is accurately scaled, even in environments where GPS, RTK or signal quality is unreliable.
              </p>
              <p>
                No electronics. No moving parts. No complexity. Just reliable, repeatable measurement-grade accuracy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Why Scaling Matters in Telecom</h3>
              <ul className="space-y-4">
                {[
                  "Live towers create interference",
                  "Rooftops block signals",
                  "Urban canyons distort GPS",
                  "Traditional RTK workflows are often unstable"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 relative group">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/wLMJzVLQwtXPiNdV.jpg" 
                alt="SiteSee ScalePoint Reference" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                  <span className="text-white font-bold text-lg">Measurement-Grade Accuracy</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Consistent scaling across towers and rooftops without GPS dependency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Ruler className="w-8 h-8 text-blue-500" />,
              title: "Physical Reference",
              desc: "Precisely manufactured to known dimensions and placed within the capture scene."
            },
            {
              icon: <Zap className="w-8 h-8 text-blue-500" />,
              title: "AI Detected",
              desc: "Automatically detected and processed natively inside the SiteSee platform."
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
              title: "Zero Intervention",
              desc: "Scale is achieved automatically during reconstruction with no manual steps."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="mb-6 p-4 bg-blue-500/10 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Commercial Impact Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-slate-900/20 rounded-3xl p-8 md:p-12 border border-blue-500/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">
                Scale accuracy is a <span className="text-blue-400">commercial lever.</span>
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                With reliable scaling, colocation feasibility can be assessed in minutes, mount clearances validated visually, and EME plumes modelled with confidence.
              </p>
              
              <div className="space-y-4">
                {[
                  "Colocation feasibility assessed in minutes",
                  "Mount clearances validated visually",
                  "EME plumes modelled with confidence",
                  "Upgrade risk reduced before mobilisation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="text-4xl text-blue-500 mb-6">"</div>
                <p className="text-xl text-slate-200 italic leading-relaxed mb-6">
                  In about fifteen minutes you have a high-confidence view on whether it’s going to work. Compared to processes that used to take weeks or months, that’s a material shift.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="font-bold text-white">CEO</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Telecom CEO</p>
                    <p className="text-sm text-slate-400">Impact of NexDT-enabled workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
