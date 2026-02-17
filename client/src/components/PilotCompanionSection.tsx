import { CheckCircle2, Smartphone, MessageSquare, BarChart3, Map, BookOpen, ShieldCheck } from "lucide-react";

export default function PilotCompanionSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[300px] md:max-w-[350px]">
              {/* Phone Frame Effect */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-xl animate-pulse" />
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-800 shadow-2xl bg-slate-950">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/GKGMvaxUYJQJneUf.png" 
                  alt="SiteSee Pilot Companion App Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -right-8 top-1/4 bg-blue-600/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-xs text-blue-100 font-medium uppercase tracking-wider">Field Verified</p>
                    <p className="text-white font-bold">Data Integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Pilot Companion App</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-[1.1]">
                Elevate Field Operations with <span className="text-blue-500">Precision Guidance.</span>
              </h2>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                A comprehensive mobile application meticulously crafted to guide pilots through every critical step of a mission, ensuring consistent, accurate, and highly efficient data capture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
                  title: "AI-Powered Chatbot",
                  desc: "Instant support and answers to common queries."
                },
                {
                  icon: <Map className="w-5 h-5 text-blue-400" />,
                  title: "GPS Altitude Verifier",
                  desc: "Ensure stability during battery swaps to prevent misalignment."
                },
                {
                  icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
                  title: "Mission Analytics",
                  desc: "In-depth insights into pilot performance and completion rates."
                },
                {
                  icon: <BookOpen className="w-5 h-5 text-blue-400" />,
                  title: "Guided Workflows",
                  desc: "Step-by-step instructions for complex environments."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-500/10 rounded-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-slate-900/20 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Simpler, Safer, Reliable</h4>
                  <p className="text-sm text-slate-400">Designed for every pilot, every mission.</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                From rigorous pre-flight preparations to post-flight quality control, the Pilot Companion ensures data integrity and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
