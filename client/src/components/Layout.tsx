import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 bg-primary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white relative z-10">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">SiteSee</span>
            </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 font-medium">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[600px] p-0 bg-[#00AEEF] text-white">
                      {/* Left Column - Main Categories */}
                      <div className="w-1/3 py-4 flex flex-col">
                        <div className="group/item relative">
                          <a href="/products/nexdt" className="flex items-center justify-between px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-wider">
                            NexDT
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </a>
                          {/* Submenu for NexDT */}
                          <div className="hidden group-hover/item:block absolute left-full top-0 w-[200px] bg-[#00AEEF] py-2 -ml-1">
                            <a href="/products/nexdt" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">NEXT GEN</a>
                            <a href="/products/iea" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">IEA</a>
                            <a href="/products/ieme" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">IEME</a>
                            <a href="/products/bim" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">BIM</a>
                          </div>
                        </div>

                        <div className="group/item relative">
                          <a href="/products/capture" className="flex items-center justify-between px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-wider">
                            Capture
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </a>
                          {/* Submenu for Capture */}
                          <div className="hidden group-hover/item:block absolute left-full top-0 w-[200px] bg-[#00AEEF] py-2 -ml-1">
                            <a href="/products/capture" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">MISSION PLANNER</a>
                          </div>
                        </div>

                        <div className="group/item relative">
                          <a href="/products/3d-modeling" className="flex items-center justify-between px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-wider">
                            3D Modeling
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </a>
                          {/* Submenu for 3D Modeling */}
                          <div className="hidden group-hover/item:block absolute left-full top-0 w-[200px] bg-[#00AEEF] py-2 -ml-1">
                            <a href="/products/3d-modeling" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">TOWERSEE</a>
                            <a href="/products/3d-modeling" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">TOWERSEE MAX</a>
                            <a href="/products/ai-boost" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">AI BOOST ENGINE</a>
                          </div>
                        </div>

                        <div className="group/item relative">
                          <a href="/products/ai-analysis" className="flex items-center justify-between px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-wider">
                            AI Analysis
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </a>
                          {/* Submenu for AI Analysis */}
                          <div className="hidden group-hover/item:block absolute left-full top-0 w-[200px] bg-[#00AEEF] py-2 -ml-1">
                            <a href="/products/ai-analysis" className="block px-6 py-2 text-sm hover:bg-white/10 transition-colors text-right">AI AUDIT ENGINE</a>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Featured Image/Content */}
                      <div className="w-2/3 relative overflow-hidden bg-black">
                        <img 
                          src="/images/hero-drone-tower-v2.jpg" 
                          alt="NexDT Ecosystem" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                          <div className="mb-4">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mb-4">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="text-4xl font-display font-bold text-white tracking-tight">NexDT</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 font-medium">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <ListItem href="/industries/telco" title="Telco">
                        For tower companies and mobile network operators.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/value" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 font-medium cursor-pointer")}>
                    Value
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/company" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 font-medium cursor-pointer")}>
                    Company
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/resources" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 font-medium cursor-pointer")}>
                    Resources
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</a>
            <a href="/contact" className="rounded-none font-medium px-6 border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border bg-background/95 backdrop-blur-xl">
                <nav className="flex flex-col gap-6 mt-10">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-medium text-sm text-muted-foreground uppercase tracking-wider mb-2">Products</h3>
                    <a href="/products/nexdt" className="text-lg font-medium hover:text-primary">NexDT Platform</a>
                    <a href="/products/capture" className="text-lg font-medium hover:text-primary">Capture</a>
                    <a href="/products/ai-analysis" className="text-lg font-medium hover:text-primary">AI Analysis</a>
                  </div>
                  <div className="h-px bg-border w-full" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-medium text-sm text-muted-foreground uppercase tracking-wider mb-2">Industries</h3>
                    <a href="/industries/telco" className="text-lg font-medium hover:text-primary">Telco</a>
                  </div>
                  <div className="h-px bg-border w-full" />
                  <a href="/value" className="text-lg font-medium hover:text-primary">Value</a>
                  <a href="/company" className="text-lg font-medium hover:text-primary">Company</a>
                  <a href="/resources" className="text-lg font-medium hover:text-primary">Resources</a>
                  <div className="flex flex-col gap-3 mt-4">
                    <Link href="/login">
                      <Button variant="outline" className="w-full rounded-none border-border">Login</Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full rounded-none bg-primary text-white hover:bg-primary/90">Contact Us</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-display font-bold text-lg tracking-tight">SiteSee</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Transforming critical infrastructure by predicting performance and driving revenue through AI-powered digital twins.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                {['twitter', 'linkedin', 'facebook', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6">Products</h4>
              <ul className="space-y-3">
                <li><Link href="/products/nexdt"><a className="text-muted-foreground hover:text-primary transition-colors">NexDT Ecosystem</a></Link></li>
                <li><Link href="/products/capture"><a className="text-muted-foreground hover:text-primary transition-colors">DroneSee Mission Planner</a></Link></li>
                <li><Link href="/products/ai-analysis"><a className="text-muted-foreground hover:text-primary transition-colors">AI Audit Engine</a></Link></li>
                <li><Link href="/products/3d-modeling"><a className="text-muted-foreground hover:text-primary transition-colors">TowerSee MAX</a></Link></li>
                <li><Link href="/products/bim"><a className="text-muted-foreground hover:text-primary transition-colors">BIM Catalogue</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/company"><a className="text-muted-foreground hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/careers"><a className="text-muted-foreground hover:text-primary transition-colors">Careers</a></Link></li>
                <li><Link href="/resources"><a className="text-muted-foreground hover:text-primary transition-colors">Resources</a></Link></li>
                <li><Link href="/blog"><a className="text-muted-foreground hover:text-primary transition-colors">Blog</a></Link></li>
                <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary transition-colors">Contact</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/terms"><a className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></Link></li>
                <li><Link href="/privacy"><a className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></Link></li>
                <li className="text-muted-foreground pt-4">
                  <div className="font-mono text-xs">ABN 76 615 057 844</div>
                  <div className="font-mono text-xs mt-1">ISO27001:2022 Certified</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © SiteSee 2016-{new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              SYSTEM OPERATIONAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none font-display">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
