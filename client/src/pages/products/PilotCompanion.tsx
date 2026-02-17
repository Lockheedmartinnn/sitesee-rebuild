import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MessageSquare, BarChart3, Map, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";

export default function PilotCompanion() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Pilot Companion" 
        subtitle="Elevate Field Operations with Precision Guidance."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/qKFtpdNipuUBuTvr.png"
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
                Your Digital <span className="text-blue-600">Field Assistant.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                SiteSee Pilot Companion is a comprehensive mobile application meticulously crafted to elevate drone-based field operations for both tower and rooftop inspections.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This advanced tool guides pilots through every critical step of a mission, from rigorous pre-flight preparations to seamless flight execution and post-flight quality control.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Field Verified</h4>
                    <p className="text-sm text-slate-500">Ensures data integrity on-site.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Mobile First</h4>
                    <p className="text-sm text-slate-500">Designed for field efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative w-[300px] rounded-[2.5rem] overflow-hidden border-8 border-slate-900 shadow-2xl bg-slate-950">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/qKFtpdNipuUBuTvr.png" 
                  alt="SiteSee Pilot Companion App Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
              <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Packed with Essential Tools
            </h2>
            <p className="text-lg text-slate-600">
              Beyond core checklist functionality, the Pilot Companion empowers pilots with advanced features for operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                title: "AI Chatbot",
                desc: "Instant support and answers to common queries, enhancing field efficiency."
              },
              {
                icon: <Map className="w-6 h-6 text-blue-600" />,
                title: "GPS Verifier",
                desc: "Ensures GPS stability during battery swaps to prevent costly data misalignment."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                title: "Mission Analytics",
                desc: "In-depth insights into pilot performance, completion rates, and historical data."
              },
              {
                icon: <BookOpen className="w-6 h-6 text-blue-600" />,
                title: "Guided Workflows",
                desc: "Step-by-step instructions for diverse mission types and complex environments."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Simpler, Safer, Reliable</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Designed to ensure consistent, accurate, and highly efficient data capture for every pilot.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-lg font-bold shadow-lg hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
