import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Value() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-32 md:py-48 lg:py-64 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-4xl space-y-12">
            <h1 className="text-foreground">
              NexDT as a financial performance lever
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              This is not a technology upgrade. It is a structural operating model improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Cornerstone Case Study */}
      <section className="py-32 md:py-48 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Case Study</p>
              <h2 className="text-foreground">
                Proven Outcomes — Cornerstone (UK)
              </h2>
              <p className="text-lg text-muted-foreground">
                18 months of live production use
              </p>
            </div>

            <div className="separator-line" />

            <div className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Operating Cost Reduction</h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">Replacement of physical surveys with rMSVs</p>
                  <p className="text-3xl font-bold text-primary">Millions in avoided access and contractor costs</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Engineering Productivity</h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">RFT (Right-First-Time) improvement</p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Before</p>
                      <p className="text-4xl font-bold text-muted-foreground">~30%</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">After</p>
                      <p className="text-4xl font-bold text-primary">~80%</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground pt-4">Higher throughput without headcount growth</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Revenue Acceleration</h3>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">Upgrade and colocation timelines compressed</p>
                  <p className="text-3xl font-bold text-primary">Lease revenue realised materially earlier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-32 md:py-48 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-foreground">
              What This Means for Tower Owners
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For executives, the upside is clear:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Faster Approvals</h3>
                <p className="text-lg text-muted-foreground">Faster revenue realisation</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Fewer Site Visits</h3>
                <p className="text-lg text-muted-foreground">Lower operational expense</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Better Data</h3>
                <p className="text-lg text-muted-foreground">Stronger capital decisions</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Scale Without Cost</h3>
                <p className="text-lg text-muted-foreground">Scale without proportional cost growth</p>
              </div>
            </div>

            <div className="separator-line my-12" />

            <p className="text-xl md:text-2xl font-semibold text-foreground italic">
              This is portfolio-level leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Scale */}
      <section className="py-32 md:py-48 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-foreground">
              Built for Scale
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thousands of live sites</h3>
                  <p className="text-muted-foreground">Deployed across major tower operators</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Embedded in production workflows</h3>
                  <p className="text-muted-foreground">Not a pilot. Not a trial. Live operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Multi-year contracts</h3>
                  <p className="text-muted-foreground">Long-term partnerships with infrastructure operators</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Designed for long-life assets</h3>
                  <p className="text-muted-foreground">Built to run infrastructure for decades</p>
                </div>
              </div>
            </div>

            <div className="separator-line my-12" />

            <p className="text-xl md:text-2xl font-semibold text-foreground italic">
              This isn't a pilot. It's infrastructure.
            </p>
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
