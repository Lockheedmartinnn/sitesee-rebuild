import { Play } from "lucide-react";
import { useState } from "react";

export default function NexDT() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Platform Overview",
      description: "See how NexDT transforms design workflows with integrated analysis and compliance",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Design in the Digital Twin",
      description: "Drag-and-drop BIM design directly in the digital twin with real-world context",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Predictive Analysis",
      description: "Run structural and EME analysis in minutes to validate designs before implementation",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="NexDT Platform" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
              NexDT
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-blue-400 font-bold">
              Predictive Asset Performance — Built Into the Design Process
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              NexDT transforms the digital twin from a static representation into a predictive decision engine. By unifying design, engineering analysis, and compliance inside a single governed platform, NexDT enables teams to understand site performance before steel is touched.
            </p>

            <div className="pt-8">
              <p className="text-lg text-white/70 italic">
                This is not post-design validation. This is performance intelligence embedded at the point of design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Videos Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                See NexDT in Action
              </h2>
              <p className="text-xl text-slate-600 mt-6">
                Explore how NexDT streamlines design workflows, analysis, and compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div 
                    className="relative bg-black rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video flex items-center justify-center"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <img 
                      src="/images/digital-interface-clean.jpg" 
                      alt={video.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-6">{video.title}</h3>
                  <p className="text-slate-600 mt-2">{video.description}</p>
                </div>
              ))}
            </div>

            {/* Video Player Modal */}
            {activeVideo && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="w-full max-w-4xl">
                  <div className="relative bg-black rounded-sm overflow-hidden aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={videos.find(v => v.id === activeVideo)?.embedUrl}
                      title="NexDT Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="mt-4 px-6 py-2 bg-slate-700 text-white rounded-sm hover:bg-slate-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Integrated Design & Analysis */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Integrated Design & Analysis
              </h2>

              <p className="text-xl text-slate-600">
                Traditional workflows separate design, engineering, compliance, and approval into disconnected steps. NexDT collapses these into a single continuous workflow.
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-sm border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg text-foreground mb-2">Fewer handoffs</h3>
                  <p className="text-slate-600">Designs are created directly inside the digital twin and evaluated in real time using integrated engineering and compliance tools.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-sm border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg text-foreground mb-2">Higher accuracy</h3>
                  <p className="text-slate-600">All stakeholders work from a single source of truth, eliminating version conflicts and interpretation errors.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-sm border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg text-foreground mb-2">No late-stage surprises</h3>
                  <p className="text-slate-600">Issues are surfaced early in the design process, when they are cheapest to resolve.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/engineering-team-office.jpg" 
                  alt="Integrated workflow" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Asset Performance */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/digital-interface-clean.jpg" 
                  alt="Predictive analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Predictive Asset Performance
              </h2>

              <p className="text-xl text-slate-600">
                NexDT enables the creation of high-fidelity digital twins that reflect the real-world geometry, configuration, and constraints of each site. Design scenarios can be simulated before implementation to:
              </p>

              <ul className="space-y-4">
                {[
                  "Identify structural risk",
                  "Assess EME exposure",
                  "Validate upgrade feasibility",
                  "Compare design alternatives"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 italic">
                Issues are surfaced early, when they are cheapest to resolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Without Friction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1]">
                Compliance Without Friction
              </h2>

              <p className="text-xl text-slate-600">
                Regulatory compliance is embedded, not bolted on. NexDT simplifies EME / RF hazard assessments by allowing teams to visualise electromagnetic field distributions and run indicative EME prediction scenarios.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Visualise EME Fields</h3>
                    <p className="text-slate-600">See electromagnetic field distributions in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Run Scenarios</h3>
                    <p className="text-slate-600">Validate compliance during design, not after submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Faster Approvals</h3>
                    <p className="text-slate-600">Lower compliance risk and greater stakeholder confidence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/tower-structural-detail.jpg" 
                  alt="Compliance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-16">
            Key Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic BIM Catalogue",
                description: "Governed, dynamic BIM library designed specifically for telecom infrastructure with correctly scaled and oriented equipment"
              },
              {
                title: "Customisable Equipment Libraries",
                description: "Maintain tailored BIM libraries aligned to approved vendors, preferred configurations, and internal engineering standards"
              },
              {
                title: "Collaboration With Accountability",
                description: "Centralised, governed environment for collaboration with full traceability across all design decisions and approvals"
              },
              {
                title: "Transparency That Builds Trust",
                description: "Every design decision, assessment, and approval is supported by visual evidence, predictive analysis, and logged actions"
              },
              {
                title: "AI-Powered Analysis",
                description: "AI-enhanced 3D reconstruction, equipment detection, rust detection, and missing bolt detection for automated validation"
              },
              {
                title: "End-to-End Integration",
                description: "Integrates directly with asset management and operational workflows for efficient post-implementation acceptance"
              }
            ].map((capability, idx) => (
              <div key={idx} className="p-8 bg-slate-800 rounded-sm border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-slate-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-foreground leading-[1.1] mb-16">
            Supported Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Tower and rooftop upgrades",
              "Equipment rip and replace",
              "Equipment upgrades",
              "Mount upgrades",
              "Shelter upgrades",
              "Greenfield site scoping",
              "Colocation applications",
              "Multi-technology deployments",
              "Capacity planning"
            ].map((useCase, idx) => (
              <div key={idx} className="p-6 bg-blue-50 rounded-sm border-l-4 border-blue-600">
                <p className="text-lg font-semibold text-foreground">{useCase}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 bg-slate-50 rounded-sm border-2 border-blue-600">
            <p className="text-2xl font-bold text-foreground text-center">
              One platform. All lifecycle stages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
              Ready to transform your design workflows?
            </h2>

            <p className="text-xl text-white/80">
              NexDT enables faster decisions, fewer redesigns, lower operating costs, and higher engineering confidence. Not by working harder — but by working inside a system designed for reality.
            </p>

            <a href="/contact" className="h-14 px-8 text-base bg-white text-black hover:bg-gray-100 border-0 font-bold rounded-none inline-flex items-center gap-2">
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
