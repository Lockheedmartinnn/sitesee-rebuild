import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Cpu, Share2, MousePointer2, FileBox, Radio, Activity } from "lucide-react";
import { Link } from "wouter";

export default function NexDT() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="NexDT: Next Generation Digital Twins" 
        subtitle="A revolutionary leap forward in the evolution of digital twins. An extraordinary ecosystem harnessing the power of AI and data insights."
        backgroundImage="/images/digital-twin-dashboard.jpg"
      >
        <div className="flex gap-4">
          <Link href="/contact">
            <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 border-0">
              Request Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/resources/case-studies">
            <Button variant="outline" size="lg" className="rounded-none border-white text-white hover:bg-white/10 bg-transparent">
              View Case Studies
            </Button>
          </Link>
        </div>
      </PageHeader>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              The Digital Twin Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NexDT supports the multi-discipline collaboration required to manage cell tower infrastructure assets today. Designed to facilitate and manage site investigation and design activities by multiple stakeholders within a unified ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              icon={<Share2 className="w-8 h-8 text-primary" />}
              title="Seamless Collaboration"
              description="Multi-role workflow support for internal and external stakeholders. Teams from engineering, maintenance, operations, and sales work together efficiently."
            />
            <FeatureCard 
              icon={<MousePointer2 className="w-8 h-8 text-primary" />}
              title="Drag & Drop Equipment"
              description="Streamlining the equipment placement process. Easily visualize proposed changes and upgrades in a realistic 3D environment."
            />
            <FeatureCard 
              icon={<FileBox className="w-8 h-8 text-primary" />}
              title="BIM Equipment Catalogue"
              description="A comprehensive catalogue for Building Information Modelling. Access a vast library of standard telco equipment for accurate design."
            />
            <FeatureCard 
              icon={<Radio className="w-8 h-8 text-primary" />}
              title="Indicative EME"
              description="Predict EME performance for RF compliance. Ensure safety standards are met before any physical work begins."
            />
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-primary" />}
              title="Predictive Load Analysis"
              description="Indicative Engineering Analysis (IEA) facilitating tower load analysis through drag and drop scenarios."
            />
            <FeatureCard 
              icon={<Cpu className="w-8 h-8 text-primary" />}
              title="AI-Driven Insights"
              description="Automated defect detection and asset classification powered by advanced machine learning algorithms."
            />
          </div>

          <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden border border-border">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                  Predict Performance for Revenue Growth
                </h3>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p>
                    By integrating advanced features, NexDT enables cell tower designers to produce more accurate, compliant, and efficient designs.
                  </p>
                  <p>
                    This reduces time-to-completion, accelerates site commissioning, and <strong className="text-white">speeds up revenue generation</strong>.
                  </p>
                </div>
                <Link href="/contact">
                  <Button size="lg" className="rounded-none bg-white text-black hover:bg-gray-100 border-0 mt-4">
                    Get Started with NexDT
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-800 rounded-sm overflow-hidden border border-white/20 shadow-2xl">
                  <img 
                    src="/images/digital-twin-dashboard.jpg" 
                    alt="NexDT Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-300 group">
      <div className="mb-6 p-3 bg-primary/10 w-fit rounded-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
