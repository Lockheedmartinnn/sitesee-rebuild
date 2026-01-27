import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ChevronRight, Play, Layers, Cpu, BarChart3, ShieldCheck, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower.jpg" 
            alt="Drone inspecting cell tower" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase">Next Gen Digital Twin Ecosystem</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.9] animate-fade-in-up delay-100">
              AI-POWERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">DIGITAL TWIN</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
              Transforming critical infrastructure by predicting performance and driving revenue through precision data.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up delay-300">
              <Link href="/contact">
                <Button size="lg" className="rounded-none h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/products/nexdt">
                <Button variant="outline" size="lg" className="rounded-none h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm">
                  Explore NexDT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDownIcon className="w-8 h-8" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Transforming the <br />
                <span className="text-primary">Cell Tower Industry</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At SiteSee, we're on a mission to revolutionize the tower industry by transforming the speed, accuracy, and cost-effectiveness of co-location and asset management processes.
                </p>
                <p>
                  Our vision is backed by close collaboration with major tower operators, resulting in the creation of the ground-breaking "Next Generation Digital Twin Ecosystem" – <strong className="text-foreground">NexDT</strong>.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <StatCard number="10x" label="Faster Inspections" />
                <StatCard number="99.9%" label="Data Accuracy" />
                <StatCard number="50%" label="Cost Reduction" />
                <StatCard number="0" label="Repeat Site Visits" />
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden border border-border group">
                <img 
                  src="/images/ai-analysis-overlay.jpg" 
                  alt="AI Analysis Overlay" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tech Overlay UI */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 m-4">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                  
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-mono p-2 border-l-2 border-primary">
                    <div>STATUS: ANALYZING</div>
                    <div className="text-primary">CONFIDENCE: 98.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NexDT Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block border border-primary/50 px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4">
              INTRODUCING
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
              NexDT Ecosystem
            </h2>
            <p className="text-xl text-gray-400">
              More than just a solution. An extraordinary digital twin ecosystem harnessing the power of AI and data insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Layers className="w-10 h-10 text-primary" />}
              title="Digital Twin Creation"
              description="Seamless promotion of existing digital twins to a more advanced platform with high-fidelity 3D modeling."
            />
            <FeatureCard 
              icon={<Cpu className="w-10 h-10 text-primary" />}
              title="AI Validation & Analytics"
              description="Revolutionize real-time co-location and asset performance prediction with advanced AI algorithms."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-10 h-10 text-primary" />}
              title="Reporting & Collaboration"
              description="Centralized platform integrating data, workflows, and communication for all stakeholders."
            />
          </div>

          <div className="mt-24 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/digital-twin-dashboard.jpg" 
              alt="NexDT Dashboard Interface" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl font-display font-bold mb-4">Predict Performance for Revenue Growth</h3>
              <p className="text-gray-300 max-w-2xl mb-8">
                By integrating advanced features, NexDT enables cell tower designers to produce more accurate, compliant, and efficient designs. This reduces time-to-completion and accelerates site commissioning.
              </p>
              <div className="flex flex-wrap gap-4">
                <FeatureTag text="Seamless Collaboration" />
                <FeatureTag text="Drag & Drop Equipment" />
                <FeatureTag text="BIM Catalogue" />
                <FeatureTag text="Predictive Load Analysis" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold tracking-tight">Industries We Serve</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Tailored solutions for critical infrastructure owners and operators.
              </p>
            </div>
            <Link href="/industries">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                View All Industries
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IndustryCard 
              title="Telco"
              description="Due to advances in technology and growth in data usage, telecommunication infrastructure professionals are expected to do more with less."
              image="/images/hero-drone-tower.jpg"
              href="/industries/telco"
            />
            <IndustryCard 
              title="Power"
              description="Power transmission & distribution professionals have some of the most widely distributed and remote assets to build, maintain and repair."
              image="/images/collaboration-engineers.jpg"
              href="/industries/power"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-drone-tower.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Join the leading tower operators using SiteSee to predict performance and drive revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="rounded-none h-16 px-10 text-lg bg-white text-primary hover:bg-gray-100 border-0 font-bold">
                Get Started Now
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="rounded-none h-16 px-10 text-lg border-white text-white hover:bg-white/10 bg-transparent">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <div className="text-3xl font-display font-bold text-foreground">{number}</div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group">
      <div className="mb-6 p-3 bg-primary/10 w-fit rounded-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300">
      <Check className="w-3 h-3 text-primary" />
      {text}
    </div>
  );
}

function IndustryCard({ title, description, image, href }: { title: string; description: string; image: string; href: string }) {
  return (
    <Link href={href}>
      <a className="group relative h-[400px] overflow-hidden block border border-border">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl font-display font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {description}
          </p>
          <div className="flex items-center text-primary font-medium uppercase tracking-wider text-sm">
            Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </a>
    </Link>
  );
}
