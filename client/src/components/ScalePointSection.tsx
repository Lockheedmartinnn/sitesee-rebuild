import { CheckCircle2 } from "lucide-react";

export default function ScalePointSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Precision Scaling</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
              SiteSee <span className="text-blue-400">ScalePoint</span>
            </h2>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Precision Scaling. Anywhere. Every Time.
            </p>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                In telecommunications infrastructure, accuracy is not optional. Every mount, antenna, dish and clearance decision depends on scale being right.
              </p>
              <p>
                <strong>SiteSee ScalePoint</strong> is our proprietary physical scaling reference, purpose-built for wireless telecom towers and rooftops. It ensures every NexDT digital twin is accurately scaled, even in environments where GPS, RTK or signal quality is unreliable.
              </p>
              <p className="italic text-slate-500">
                No electronics. No moving parts. No complexity. Just reliable, repeatable measurement-grade accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Consistent scaling across towers",
                "Reliable in GPS-challenged zones",
                "Confidence in EME assessments",
                "Reduced need for repeat visits"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="/images/scalepoint.png" 
                alt="SiteSee ScalePoint deployed on a rooftop site" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-slate-300 font-medium">
                  Deployed on thousands of live telecom sites supporting large-scale rollout programs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-slate-800">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Why Scaling Matters</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Live towers create interference. Rooftops block signals. Urban canyons distort GPS. Traditional RTK workflows often fail near active infrastructure. ScalePoint solves this with a physical, AI-detected reference.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">How It Works</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A passive physical reference placed in the scene, precisely manufactured and automatically detected by SiteSee's AI. Scale is achieved natively during reconstruction without manual intervention.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Faster Decisions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              "In about fifteen minutes you have a high-confidence view on whether it’s going to work." Reliable scaling means feasibility checks, mount clearances, and EME modeling can be done instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
