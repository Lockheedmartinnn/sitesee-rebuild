import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, CheckCircle2, Shield, Zap, Target } from "lucide-react";
import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";

export default function ScalePoints() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="ScalePoint" 
        subtitle="Precision Scaling. Anywhere. Every Time."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/wLMJzVLQwtXPiNdV.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              Request Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </PageHeader>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">
                Accuracy is <span className="text-blue-600">Not Optional.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                In telecommunications infrastructure, every mount, antenna, dish, and clearance decision depends on scale being right. SiteSee ScalePoint is our proprietary physical scaling reference, purpose-built for wireless telecom towers and rooftops.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                It ensures every NexDT digital twin is accurately scaled, even in environments where GPS, RTK, or signal quality is unreliable. No electronics. No moving parts. Just reliable, repeatable measurement-grade accuracy.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Zero Electronics</h4>
                    <p className="text-sm text-slate-500">No batteries or signal dependency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">AI Detected</h4>
                    <p className="text-sm text-slate-500">Automated processing workflow.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/wLMJzVLQwtXPiNdV.jpg" 
                  alt="SiteSee ScalePoint Reference" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              </div>
              {/* Moved to side to avoid covering image */}
              <div className="absolute -bottom-12 right-0 md:-right-12 bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 max-w-xs z-10">
                <p className="font-display font-bold text-white mb-2">Why it matters</p>
                <p className="text-sm text-slate-400 italic">
                  "In about fifteen minutes you have a high-confidence view on whether it’s going to work."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              How ScalePoint Works
            </h2>
            <p className="text-lg text-slate-600">
              ScalePoint is a passive physical reference placed within the capture scene, precisely manufactured to known dimensions and automatically detected by the SiteSee AI engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Reference",
                desc: "Placed within the capture scene, ScalePoint provides a known dimensional anchor for the entire 3D reconstruction.",
                icon: <Ruler className="w-8 h-8 text-blue-600" />
              },
              {
                title: "AI Detection",
                desc: "Automatically identified by our AI engine, eliminating manual scaling errors and speeding up processing.",
                icon: <Zap className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Native Integration",
                desc: "Processed natively inside the SiteSee platform, scale is achieved automatically without manual intervention.",
                icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Enabling Faster Decisions
              </h2>
              <div className="space-y-6">
                {[
                  "Assess colocation feasibility in minutes",
                  "Validate mount clearances visually",
                  "Model EME plumes with confidence",
                  "Perform Indicative Engineering Assessments early",
                  "Reduce upgrade risk before site mobilisation"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Built for Wireless</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Unlike generic photogrammetry tools, SiteSee is focused solely on wireless telecommunications infrastructure. ScalePoint was engineered specifically for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Live RF environments
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Rooftop-heavy portfolios
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Large towerco networks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Scale with Confidence</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Ensure every NexDT model is not just visually compelling, but dimensionally dependable.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
