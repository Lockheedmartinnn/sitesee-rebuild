import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart, Shield, Clock, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Telco() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Telecommunication Infrastructure Intelligence" 
        subtitle="Apply artificial intelligence to drone captured data enabling infrastructure owners to make informed decisions, reduce operational costs & improve safety."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/eFVGENrXEJZAfIXF.jpg"
      >
        <Link href="/contact">
          <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 border-0 font-semibold">
            Partner Today <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </PageHeader>

      {/* The Challenge */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
                The Challenge
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Due to advances in technology and growth in data usage, telecommunication infrastructure professionals and network carriers are expected to do more — with less.
                </p>
                <p>
                  Ensuring accurate and up-to-date information on every asset they manage is time consuming, labour intensive and costly. This is compounded by complex infrastructure sharing arrangements that are now the norm in the market.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TfKFCVcvhcpbvBhW.jpg" 
                alt="Tower structural detail" 
                className="relative w-full rounded-sm border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 md:py-32 bg-muted/50 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/aoyVPyFMYDMEaibe.jpg" 
                alt="Digital interface" 
                className="relative w-full rounded-sm border border-border shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
                The SiteSee Solution
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Current assessment techniques are both expensive and slow to execute due to physical data collection practices and manual data entry. Together, these elements lead to slow and inefficient asset management decision processes & inaccurate records.
                </p>
                <p>
                  SiteSee's web accessible software applies artificial intelligence to drone captured data, enabling infrastructure owners to make informed decisions, reduce operational costs & improve safety. Our end-to-end solution covers everything from flight planning to the detailed reports that enable good decision making.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <BenefitItem text="Reduce Operational Costs" />
                <BenefitItem text="Improve Safety" />
                <BenefitItem text="Informed Decisions" />
                <BenefitItem text="End-to-End Solution" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why SiteSee for Telco */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-center mb-16">
            Why SiteSee for Telco?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Shield className="w-10 h-10 text-primary" />}
              title="Safety First"
              description="Eliminate the need for dangerous climbs for routine inspections. Keep your personnel safe on the ground."
            />
            <BenefitCard 
              icon={<BarChart className="w-10 h-10 text-primary" />}
              title="Data Accuracy"
              description="High-fidelity digital twins provide millimeter-accurate measurements that manual inspections can't match."
            />
            <BenefitCard 
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="Speed to Revenue"
              description="Accelerate co-location approvals and site upgrades with instant access to accurate asset data."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            Ready to Modernise Your Telco Operations?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join leading tower operators using SiteSee to make smarter infrastructure decisions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none bg-white text-primary hover:bg-gray-100 border-0 font-bold h-14 px-10 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
        <Check className="w-3 h-3 text-primary" />
      </div>
      <span className="font-medium text-foreground">{text}</span>
    </li>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 text-left hover:bg-white/10 transition-colors duration-300">
      <div className="mb-6 p-3 bg-primary/10 w-fit rounded-sm">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
