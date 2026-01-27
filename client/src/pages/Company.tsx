import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Company() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="About SiteSee" 
        subtitle="We're on a mission to revolutionise the tower industry by transforming the speed, accuracy, and cost-effectiveness of co-location and asset management processes."
        backgroundImage="/images/collaboration-engineers.jpg"
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold tracking-tight">
                Our Vision
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  SiteSee was founded with a clear purpose: to bring the physical world of critical infrastructure into the digital age with unprecedented precision.
                </p>
                <p>
                  Our vision is backed by close collaboration with major tower operators, resulting in the creation of the ground-breaking "Next Generation Digital Twin Ecosystem" – NexDT. We believe that accurate data is the foundation of safe, efficient, and profitable infrastructure management.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatBox number="2016" label="Founded" />
              <StatBox number="ISO" label="27001 Certified" />
              <StatBox number="Global" label="Operations" />
              <StatBox number="AI" label="Powered Core" />
            </div>
          </div>

          <div className="border-t border-border pt-24">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Why Leading Operators Trust SiteSee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ValueProp 
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Built by Engineers"
                description="Our team understands the field because we come from it. We build tools that solve real-world problems, not just theoretical ones."
              />
              <ValueProp 
                icon={<ShieldCheck className="w-10 h-10 text-primary" />}
                title="Security First"
                description="We are ISO 27001:2022 certified, ensuring the highest standards of data security for your critical infrastructure assets."
              />
              <ValueProp 
                icon={<Award className="w-10 h-10 text-primary" />}
                title="Industry Leading"
                description="Our AI and digital twin technology is at the forefront of the industry, constantly evolving to meet new challenges."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-display font-bold">Join the Revolution</h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a tower operator looking to modernize or an engineer looking for your next challenge, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 border-0 px-8">
                Contact Us
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary/10 px-8">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors duration-300">
      <div className="text-3xl font-display font-bold text-primary mb-2">{number}</div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ValueProp({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="mx-auto w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
