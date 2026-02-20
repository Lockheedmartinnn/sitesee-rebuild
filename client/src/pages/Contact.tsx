import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Contact Us" 
        subtitle="Ready to transform your infrastructure management? Get in touch with our team today."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/mItwEHtgdHfmlgKd.jpg"
        className="py-20 md:py-24"
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-display font-bold">Send us a message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="rounded-none h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="rounded-none h-12" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" className="rounded-none h-12" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="rounded-none min-h-[150px]" />
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-none bg-primary text-white hover:bg-primary/90 h-12 text-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12 lg:pl-12 lg:border-l border-border">
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold">Get in touch</h2>
                
                <div className="space-y-6">
                  <ContactItem 
                    icon={<Mail className="w-6 h-6 text-primary" />}
                    title="Email"
                    content="info@sitesee.io"
                    href="mailto:info@sitesee.io"
                  />
                  <ContactItem 
                    icon={<Phone className="w-6 h-6 text-primary" />}
                    title="Phone"
                    content="+61 7 3000 0000"
                    href="tel:+61730000000"
                  />
                  <ContactItem 
                    icon={<MapPin className="w-6 h-6 text-primary" />}
                    title="Headquarters"
                    content="Brisbane, Australia"
                  />
                </div>
              </div>

              <div className="p-8 bg-muted/30 border border-border">
                <h3 className="text-xl font-display font-bold mb-4">Support</h3>
                <p className="text-muted-foreground mb-6">
                  Already a customer? Visit our Learning Centre or contact support directly.
                </p>
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/10 w-full">
                  Visit Learning Centre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, title, content, href }: { icon: React.ReactNode; title: string; content: string; href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        {href ? (
          <a href={href} className="text-muted-foreground hover:text-primary transition-colors text-lg">
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground text-lg">{content}</p>
        )}
      </div>
    </div>
  );
}
