import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Users, CheckCircle2, Zap, Shield, Database, Eye } from "lucide-react";
import { Link } from "wouter";

export default function NexDT() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="NextDT: Design. Validate. Approve. Govern." 
        subtitle="NextDT is SiteSee's digital twin platform for pre-as-built design, colocation workflows, and engineering governance. Built for how real towercos operate — not how software vendors think they do."
        backgroundImage="/images/digital-interface-clean.jpg"
      >
        <Link href="/contact">
          <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 border-0 font-semibold">
            Request Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </PageHeader>

      {/* What NextDT Enables */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-16 text-foreground">
            What NextDT Enables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EnablementCard 
              title="Confident Design"
              subtitle="Before steel is touched"
              description="Model upgrades, swaps, and additions digitally. Understand structural and EME impact before anyone climbs."
            />
            <EnablementCard 
              title="Structured Colocation"
              subtitle="Clear roles. Clear accountability."
              description="Colo users design. Engineers validate. Admins govern. Nothing slips through the cracks."
            />
            <EnablementCard 
              title="Engineering Decisions"
              subtitle="You can stand behind"
              description="Indicative assessments. Governed approvals. Complete transaction history — in one system."
            />
          </div>
        </div>
      </section>

      {/* How NextDT Works */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-16 text-foreground">
            How NextDT Works
          </h2>

          <div className="space-y-16">
            <WorkflowStep 
              number="1"
              icon={<Lock className="w-8 h-8" />}
              title="Access & Governance First"
              description="Every user enters through a secure, MFA-protected environment. Permissions aren't a suggestion. They're enforced by design."
            />
            <WorkflowStep 
              number="2"
              icon={<Users className="w-8 h-8" />}
              title="Colo Users Design Digitally"
              description="Create applications to rip existing equipment, replace with new assets, position and align accurately, and run Indicative Engineering Assessments (IEA) — all inside a live 3D environment, not static drawings."
            />
            <WorkflowStep 
              number="3"
              icon={<Eye className="w-8 h-8" />}
              title="Engineers Stay in Control"
              description="Engineers review designs visually, make override edits, trigger confirmation workflows, and approve only when standards are met. No approval without engineering sign-off. Period."
            />
            <WorkflowStep 
              number="4"
              icon={<Database className="w-8 h-8" />}
              title="BIM Data That Actually Matters"
              description="A governed equipment library with accurate geometry, correct scale & orientation, Effective Sail Area (ESA), and manufacturer-validated EME data. No ghost equipment. No broken models. No guesswork."
            />
            <WorkflowStep 
              number="5"
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Full Auditability. Zero Chaos."
              description="Every change is logged: Who, What, When, Why, and under which application. This is infrastructure governance — not file sharing."
            />
          </div>
        </div>
      </section>

      {/* Engineering Tools */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-16 text-foreground">
            Engineering Tools That Fit Reality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ToolCard 
              title="Indicative Engineering Assessment (IEA)"
              items={[
                "Run on demand",
                "Compare existing vs proposed load",
                "Inform decisions early",
                "Kill rework before it starts"
              ]}
            />
            <ToolCard 
              title="Electromagnetic Energy (EME)"
              items={[
                "Catalog-driven",
                "Configuration-aware",
                "Designed for real compliance workflows",
                "Not spreadsheets. Not assumptions."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-16">
            One Platform. Many Stakeholders.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StakeholderCard 
              title="Engineering Leads"
              items={["Clear accountability", "Controlled approvals", "Fewer downstream surprises"]}
            />
            <StakeholderCard 
              title="Operations"
              items={["Faster turnaround", "Less rework", "Repeatable execution"]}
            />
            <StakeholderCard 
              title="Executives"
              items={["Lower risk", "Better capital efficiency", "Scalable governance"]}
            />
            <StakeholderCard 
              title="Security & Control"
              items={["Multi-Factor Authentication", "Role-based access control", "Immutable historical records"]}
            />
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
                Training & Enablement Built In
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                SiteSee supports adoption through role-based learning paths, scenario-driven assessments, certification & refreshers, and in-app guidance. Because tools only work when people know how to use them properly.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 border-0 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted border border-border rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/engineering-team-office.jpg" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            From Capture to Decision
          </h2>
          <p className="text-2xl font-light max-w-2xl mx-auto">
            Capture → Model → Design → Validate → Approve → Deploy. No handoffs. No data loss. No ambiguity.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none bg-white text-primary hover:bg-gray-100 border-0 font-bold h-14 px-10 text-lg">
              Get Started with NextDT
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function EnablementCard({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <div className="bg-card border border-border p-8 hover:border-primary/50 transition-colors">
      <h3 className="text-2xl font-display font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider">{subtitle}</p>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

function WorkflowStep({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-border last:border-b-0">
      <div className="md:col-span-2 space-y-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground">{title}</h3>
      </div>
      <div className="md:col-span-10">
        <p className="text-lg text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ToolCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-card border border-border p-8">
      <h3 className="text-2xl font-display font-bold mb-6 text-foreground">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/70">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StakeholderCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
      <h3 className="text-xl font-display font-bold mb-6 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-white/80">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
