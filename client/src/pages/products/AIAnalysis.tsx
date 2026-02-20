import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Scan, AlertTriangle, FileText } from "lucide-react";
import { Link } from "wouter";

export default function AIAnalysis() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg" 
            alt="AI Analysis" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Artificial Intelligence Audit Engine</span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              Automated Defect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Detection & Classification</span>
            </h1>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              The most advanced AI Audit engine for real world infrastructure. Automatically detect classification and position of equipment without human intervention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href="/contact" className="h-14 px-8 text-base bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Request Demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Scan className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">AI Equipment Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                Detect all emitting and non emitting equipment with all their measurements and their 3D position using Shapefitting™ technology.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <AlertTriangle className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">AI Corrosion Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                Detect corrosion and classify corrosion severity with its 3D position. Results available in 3D model and reports.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FileText className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold font-display">Exception Reporting</h3>
              <p className="text-slate-600 leading-relaxed">
                Compare actual AI detected as-built equipment list with customer equipment list to identify discrepancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[1.1]">
                Powered by Advanced Machine Learning
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  The heavy lift is provided by Machine Learning and implementation of several Convolution Neural Networks (CNN). The end results is your infrastructure is automatically detected and classified through an end to end automated process without any human intervention.
                </p>
                <p>
                  By combining our advanced machine learning and Shapefitting™ technology, we deliver the most accurate equipment audit. Audit results are made readily available in the 3D model and through PDF and CSV reports.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Automated Detection</h4>
                    <p className="text-sm text-slate-400">No human intervention required</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Shapefitting™ Tech</h4>
                    <p className="text-sm text-slate-400">Most accurate equipment audit</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Multi-format Reports</h4>
                    <p className="text-sm text-slate-400">3D model, PDF, and CSV</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Corrosion Severity</h4>
                    <p className="text-sm text-slate-400">Classified with 3D position</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
                  alt="AI Analysis Interface" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <p className="text-sm font-mono text-blue-400 mb-2">AI ENGINE</p>
                    <p className="text-white font-medium">Processing Complete: 99.8% Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Experience the power of AI automation.
            </h2>
            <p className="text-xl text-blue-100">
              Transform your asset auditing with SiteSee's AI Audit Engine.
            </p>
            <a href="/contact" className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
