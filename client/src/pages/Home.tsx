import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ChevronRight, Layers, Cpu, BarChart3, ShieldCheck, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Strong Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-drone-tower-v2.jpg" 
            alt="Drone inspecting cell tower" 
            className="w-full h-full object-cover"
          />
          {/* Strong dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 pt-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-white font-semibold">Next Generation Digital Twin</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.95] text-white">
              The Operating System <br />
              <span className="text-primary">for Telecom Infrastructure</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              SiteSee is how modern tower companies design, validate, deploy, and govern network assets — digitally, accurately, and at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-none h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0 font-semibold">
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/products/nexdt">
                <Button variant="outline" size="lg" className="rounded-none h-14 px-8 text-lg border-white/50 text-white hover:bg-white/20 hover:text-white bg-transparent backdrop-blur-sm font-semibold">
                  Explore NextDT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDownIcon className="w-8 h-8" />
        </div>
      </section>

      {/* Why SiteSee Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
                Why SiteSee
              </h2>
              <p className="text-2xl font-light text-foreground/80 leading-relaxed">
                Telecom infrastructure is no longer simple.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ChallengeItem text="Multi-tenant towers" />
              <ChallengeItem text="Constant rip & replace cycles" />
              <ChallengeItem text="Tight regulatory constraints" />
              <ChallengeItem text="Zero tolerance for rework" />
            </div>

            <div className="space-y-8 border-l-4 border-primary pl-8">
              <p className="text-xl text-foreground/70 leading-relaxed">
                Yet most workflows still rely on PDFs, static drawings, disconnected tools, and manual checks. That gap is where risk lives.
              </p>
              <p className="text-3xl font-display font-bold text-foreground">
                SiteSee closes it.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We turn physical assets into decision-ready digital twins that engineering, operations, and commercial teams can actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NextDT Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-12">
            <div className="space-y-4">
              <div className="inline-block border border-primary/50 px-4 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm font-semibold">
                INTRODUCING
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter">
                NextDT by SiteSee
              </h2>
              <p className="text-2xl font-light text-white/80 leading-relaxed">
                Design. Validate. Approve. Govern.
              </p>
            </div>

            <p className="text-xl text-white/70 leading-relaxed border-l-4 border-primary pl-8">
              NextDT is SiteSee's digital twin platform for pre-as-built design, colocation workflows, and engineering governance. Built for how real towercos operate — not how software vendors think they do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <FeatureCard 
                title="Confident Design"
                subtitle="Before steel is touched"
                description="Model upgrades, swaps, and additions digitally. Understand structural and EME impact before anyone climbs."
              />
              <FeatureCard 
                title="Structured Workflows"
                subtitle="Clear roles. Clear accountability."
                description="Colo users design. Engineers validate. Admins govern. Nothing slips through the cracks."
              />
              <FeatureCard 
                title="Engineering Decisions"
                subtitle="You can stand behind"
                description="Indicative assessments. Governed approvals. Complete transaction history — in one system."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How NextDT Works */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-16 text-foreground">
            How NextDT Works
          </h2>

          <div className="space-y-12">
            <WorkflowStep 
              number="1"
              title="Access & Governance First"
              description="Every user enters through a secure, MFA-protected environment. Permissions aren't a suggestion. They're enforced by design."
            />
            <WorkflowStep 
              number="2"
              title="Colo Users Design Digitally"
              description="Create applications to rip existing equipment, replace with new assets, position and align accurately, and run Indicative Engineering Assessments (IEA) — all inside a live 3D environment, not static drawings."
            />
            <WorkflowStep 
              number="3"
              title="Engineers Stay in Control"
              description="Engineers review designs visually, make override edits, trigger confirmation workflows, and approve only when standards are met. No approval without engineering sign-off. Period."
            />
            <WorkflowStep 
              number="4"
              title="BIM Data That Actually Matters"
              description="A governed equipment library with accurate geometry, correct scale & orientation, Effective Sail Area (ESA), and manufacturer-validated EME data. No ghost equipment. No broken models. No guesswork."
            />
            <WorkflowStep 
              number="5"
              title="Full Auditability. Zero Chaos."
              description="Every change is logged: Who, What, When, Why, and under which application. This is infrastructure governance — not file sharing."
            />
          </div>
        </div>
      </section>

      {/* Built for Towercos Section */}
      <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/engineering-team-office.jpg" 
            alt="Engineering team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-white">
              Built for Towercos, Not Demos
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              NextDT isn't a visualization toy. It's built for high-volume colocation, multi-tenant assets, engineering accountability, and operational repeatability. Hundreds of sites or tens of thousands — the workflow doesn't change.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <BenefitBox 
                title="For Engineering Leads"
                items={["Clear accountability", "Controlled approvals", "Fewer downstream surprises"]}
              />
              <BenefitBox 
                title="For Operations"
                items={["Faster turnaround", "Less rework", "Repeatable execution"]}
              />
              <BenefitBox 
                title="For Executives"
                items={["Lower risk", "Better capital efficiency", "Scalable governance"]}
              />
              <BenefitBox 
                title="Security & Control"
                items={["Multi-Factor Authentication", "Role-based access control", "Immutable historical records"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10 text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            Ready to Modernise Infrastructure Decisions?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            If you want fewer redesigns, faster approvals, and stronger engineering confidence — you're already thinking like a SiteSee customer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-none h-16 px-10 text-lg bg-white text-primary hover:bg-gray-100 border-0 font-bold">
                Get Started Now
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="rounded-none h-16 px-10 text-lg border-white text-white hover:bg-white/20 bg-transparent">
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

function ChallengeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      <span className="text-lg font-medium text-foreground">{text}</span>
    </div>
  );
}

function FeatureCard({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group">
      <h3 className="text-xl font-display font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider">{subtitle}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function WorkflowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-border last:border-b-0">
      <div className="md:col-span-2">
        <div className="text-6xl font-display font-bold text-primary/20 mb-2">{number}</div>
        <h3 className="text-2xl font-display font-bold text-foreground">{title}</h3>
      </div>
      <div className="md:col-span-10">
        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

function BenefitBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-sm">
      <h3 className="text-xl font-display font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-white/90">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
