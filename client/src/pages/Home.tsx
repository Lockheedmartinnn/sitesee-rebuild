import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Bentley Style */}
      <section className="py-32 md:py-48 lg:py-64 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-4xl space-y-12">
            <h1 className="text-foreground">
              The operating system for telecom infrastructure
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Design, validate, deploy, and govern network assets — digitally, accurately, and at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button className="btn-enterprise-primary h-14 text-base">
                  Contact Us
                </Button>
              </Link>
              <Link href="/products/nexdt">
                <Button className="btn-enterprise h-14 text-base">
                  Explore NexDT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof at Scale - KPI Section */}
      <section className="py-32 md:py-48 bg-background border-b border-border">
        <div className="container">
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              <div className="space-y-4">
                <div className="kpi-number">5,372</div>
                <p className="kpi-label">Site Capture Surveys</p>
              </div>
              <div className="space-y-4">
                <div className="kpi-number">97%</div>
                <p className="kpi-label">Right-First-Time</p>
              </div>
              <div className="space-y-4">
                <div className="kpi-number">1,641</div>
                <p className="kpi-label">Climbs Avoided</p>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-foreground italic border-l-4 border-primary pl-8">
                These aren't projections. They're operational results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-4">
                <div className="kpi-number">2,736</div>
                <p className="kpi-label">rMSV Projects</p>
              </div>
              <div className="space-y-4">
                <div className="kpi-number">694,492 kg</div>
                <p className="kpi-label">CO₂ Emissions Reduced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Industry Reality */}
      <section className="py-32 md:py-48 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="max-w-3xl space-y-16">
            <h2 className="text-foreground">
              Telecom infrastructure is no longer simple.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">The Reality</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-lg text-foreground">Multi-tenant towers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-lg text-foreground">Constant upgrade cycles</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-lg text-foreground">Tight regulatory constraints</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-lg text-foreground">Zero tolerance for rework</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Current Workflows</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span className="text-lg text-foreground">PDFs</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span className="text-lg text-foreground">Static drawings</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span className="text-lg text-foreground">Manual checks</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span className="text-lg text-foreground">Disconnected tools</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="separator-line my-8" />

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              That gap is where risk, cost, and delay live.
            </p>
          </div>
        </div>
      </section>

      {/* The SiteSee Shift */}
      <section className="py-32 md:py-48 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-3xl space-y-16">
            <h2 className="text-foreground">
              SiteSee replaces fragmented workflows with a single source of spatial truth.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From capture to approval, decisions are:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Faster</h3>
                <p className="text-muted-foreground">Eliminate manual workflows and accelerate approvals.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Governed</h3>
                <p className="text-muted-foreground">Role-based controls and enforced standards.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Auditable</h3>
                <p className="text-muted-foreground">Complete transaction history and compliance records.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Scalable</h3>
                <p className="text-muted-foreground">Consistent workflows across thousands of sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NexDT Introduction */}
      <section className="py-32 md:py-48 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="max-w-3xl space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Platform</p>
              <h2 className="text-foreground">
                NexDT by SiteSee
              </h2>
            </div>

            <p className="text-2xl font-semibold text-primary">
              Design. Validate. Approve. Govern.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              NexDT is SiteSee's digital twin platform for pre-as-built design, colocation workflows, engineering governance, and portfolio-scale decision making.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Built for how real towercos operate, not demos.
            </p>

            <Link href="/products/nexdt">
              <Button className="btn-enterprise-primary h-14 text-base mt-8">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 md:py-48 bg-background">
        <div className="container">
          <div className="max-w-3xl space-y-12">
            <h2 className="text-foreground">
              If your priorities include efficiency, precision, and governance at scale—
            </h2>

            <p className="text-2xl font-semibold text-primary">
              Then the conversation is overdue.
            </p>

            <Link href="/contact">
              <Button className="btn-enterprise-primary h-14 text-base">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
