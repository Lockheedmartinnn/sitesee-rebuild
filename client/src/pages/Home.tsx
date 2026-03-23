import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2, Play, Pause, Volume2, VolumeX, TrendingUp, Clock, ShieldCheck, Database, Layers, Users } from 'lucide-react';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      
      {/* Hero Section with Video Background - PRESERVED */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10"></div> {/* Overlay */}
          <video 
            id="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster="/hero-poster.jpg"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/WWIySGXvDveoWmug.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content - UPDATED TO MATCH SCREENSHOT */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/20 border border-primary/30 text-primary text-sm font-black uppercase tracking-widest mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2 w-2 bg-primary"></span>
              </span>
              TRUSTED BY 36,000+ TOWERS GLOBALLY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.02em] mb-8 text-white leading-[1.1]">
              AI Powered <br/>
              Digital Twins
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-[1.6] font-medium">
              Unlock the true value of your infrastructure. Accelerate upgrades, reduce costs, and optimize assets with the industry's most advanced digital twin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button size="lg" className="btn-primary h-14">
                Explore NexDT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary h-14 text-white border-white/20 hover:bg-white/10">
                Talk to Sales
              </Button>
            </div>
          </div>
          {/* Video Controls */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button onClick={toggleMute} className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-colors backdrop-blur-sm">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button onClick={togglePlay} className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-colors backdrop-blur-sm">
              {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - "Production scale. Not a pilot." */}
      <section className="py-48 bg-surface-low relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="text-[12rem] font-black leading-none tracking-tighter text-foreground flex items-center">
                3,000
                <span className="text-primary ml-2">+</span>
              </div>
              <div className="text-2xl font-black text-primary tracking-[0.3em] uppercase mt-4 ml-2">
                Remote Site Visits
              </div>
            </div>
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-[0.85] uppercase tracking-tighter">
                Production scale. <br/>
                <span className="text-muted-foreground">Not a pilot.</span>
              </h2>
              <p className="text-xl text-foreground/80 leading-[1.6] font-medium max-w-xl mb-12">
                NexDT is running in live production environments, managing critical infrastructure decisions every single day.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-surface-lowest border-l-4 border-primary p-8">
                  <div className="text-4xl font-black text-foreground mb-2">150%</div>
                  <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">YoY Growth</div>
                </div>
                <div className="bg-surface-lowest border-l-4 border-primary p-8">
                  <div className="text-4xl font-black text-foreground mb-2">18 mo</div>
                  <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">Live Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - "Most digital twins don't move the numbers" */}
      <section className="py-48 bg-surface-lowest text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-6">THE PROBLEM</div>
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase text-foreground">
                Most digital <br/>
                twins don't <br/>
                move the <br/>
                numbers.
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8 leading-[1.6] font-medium">
                They improve visibility. They reduce some site visits. They make inspection easier. 
                <strong className="text-foreground font-black block mt-2">But for most tower owners, the underlying workflows, costs, and timelines remain largely unchanged.</strong>
              </p>
              
              <div className="border-l-4 border-primary pl-8 py-4 mb-8 bg-surface-low">
                <p className="text-2xl font-black text-foreground tracking-tight">
                  "Better pictures alone do not reduce cost or accelerate revenue."
                </p>
              </div>
              
              <p className="text-lg text-foreground/80 leading-[1.6] font-medium">
                NexDT is different. It's a next-generation digital twin designed to reduce operating cost, accelerate revenue, and enable wireless infrastructure portfolios to scale without proportional increases in complexity or headcount.
              </p>
            </div>
            <div className="relative lg:-ml-20 lg:mt-32">
              <div className="relative rounded-none overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover transition-all duration-700"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/xAhWqjKuMDCftmvn.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 glass-panel p-8">
                  <p className="text-foreground text-sm font-black uppercase tracking-widest">
                    Embedded in upgrade, colocation, engineering, and compliance workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid - "Proven at scale" */}
      <section className="py-48 bg-surface-low">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-4">Proven at scale</h3>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase max-w-3xl text-foreground leading-[0.85]">
              Managing 36,000+ <br/>
              Towers Globally.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "44 Days", label: "Upgrade Approval", sub: "Reduced from 8 months", color: "text-primary" },
              { value: "80%", label: "First Time Right", sub: "Improved from 32%", color: "text-foreground" },
              { value: "5K+", label: "Tonnes", sub: "CO₂ Avoided Across the estate", color: "text-foreground" },
              { value: "30K+", label: "Climbs Avoided", sub: "High-risk climbs", color: "text-foreground" }
            ].map((metric, i) => (
              <div key={i} className="bg-surface-lowest p-12 border-t-4 border-primary group hover:-translate-y-2 transition-transform duration-300">
                <div className={`text-5xl font-black tracking-tighter mb-4 ${metric.color}`}>{metric.value}</div>
                <div className="text-lg font-black text-foreground mb-2 uppercase tracking-tight">{metric.label}</div>
                <div className="text-sm text-muted-foreground font-medium">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Story - Forty South */}
      <section className="py-48 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em] mb-12">
            <span className="h-2 w-2 rounded-none bg-primary"></span>
            Featured Customer Story
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] uppercase tracking-tighter">
                Transforming <br/>
                Operations at <span className="text-primary">Forty South</span>
              </h2>
              <p className="text-xl text-foreground/80 mb-12 leading-[1.6] font-medium">
                Discover how Forty South New Zealand leveraged SiteSee's digital twin ecosystem to revolutionize their tower management.
              </p>
              
              <div className="border-l-4 border-primary pl-8 space-y-8 bg-surface-low py-6">
                <div>
                  <div className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">Nick Clarke</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-widest">Chief Executive Officer</div>
                </div>
                <div>
                  <div className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">David Allemann</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-widest">Head of Digital Platforms</div>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="relative rounded-none overflow-hidden bg-surface-lowest aspect-video flex items-center justify-center group border border-border/10">
                <video 
                  className="w-full h-full object-cover transition-all duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/FGOqvIIoXVFlpQKM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - "Trusted by Industry Leaders" */}
      <section className="py-48 bg-surface-lowest">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-4">Testimonials</h3>
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter leading-[0.85]">Trusted by Industry Leaders</h2>
            <p className="text-xl text-foreground/80 font-medium">Hear from executives and engineers who have transformed their operations with SiteSee.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Once you can actually see the current state of the tower and trust it, everything else becomes easier. Engineering decisions, commercial conversations, customer discussions all start from a position of certainty instead of assumption.",
                author: "Nick Clarke",
                role: "CEO, FortySouth"
              },
              {
                quote: "That single insight saved us the best part of four hundred thousand dollars and nearly paid for a year of the digital twin programme on its own.",
                author: "Nick Clarke",
                role: "CEO, FortySouth"
              },
              {
                quote: "In about fifteen minutes you have a high-confidence view on whether it's going to work. Compared to processes that used to take weeks or months, that's a material shift.",
                author: "Nick Clarke",
                role: "CEO, FortySouth"
              }
            ].map((t, i) => (
              <div key={i} className="bg-surface-low border-l-4 border-primary p-12 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="text-primary/30 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-foreground/90 text-lg leading-[1.6] font-medium mb-8 flex-grow">"{t.quote}"</p>
                <div className="mt-auto pt-6 border-t border-border/10">
                  <div className="font-black text-foreground text-lg uppercase tracking-tight">{t.author}</div>
                  <div className="text-primary text-sm uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - "Trusted Globally" */}
      <section className="py-48 bg-surface-low">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter leading-[0.85]">Trusted Globally</h2>
            <p className="text-xl text-foreground/80 font-medium">Deployed across major tower operators and infrastructure providers worldwide</p>
          </div>
          
          <div className="relative w-full aspect-[2/1] bg-surface-lowest rounded-none overflow-hidden border border-border/10">
            {/* Map Placeholder Image */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
              alt="World Map" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
            />
            
            {/* Map Pins */}
            {[
              { top: '30%', left: '20%' }, // US
              { top: '35%', left: '25%' }, // US East
              { top: '25%', left: '50%' }, // Europe
              { top: '30%', left: '52%' }, // Europe East
              { top: '45%', left: '55%' }, // Middle East
              { top: '60%', left: '75%' }, // Asia
              { top: '75%', left: '85%' }, // Australia
              { top: '80%', left: '88%' }, // NZ
            ].map((pos, i) => (
              <div key={i} className="absolute" style={pos}>
                <div className="relative -translate-x-1/2 -translate-y-full group cursor-pointer">
                  <div className="h-8 w-8 text-primary drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 7 13s7-7.75 7-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-1 bg-black/20 blur-sm rounded-none"></div>
                </div>
              </div>
            ))}
            
            {/* Map Controls */}
            <div className="absolute top-8 left-8 bg-surface-lowest rounded-none border border-border/10 p-1 flex flex-col gap-1">
              <button className="p-2 hover:bg-muted rounded-none text-foreground font-bold transition-colors">+</button>
              <div className="h-px bg-border/10 w-full"></div>
              <button className="p-2 hover:bg-muted rounded-none text-foreground font-bold transition-colors">-</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Section - "Telecom infrastructure is no longer simple" */}
      <section className="py-48 bg-surface-lowest">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-foreground mb-12 leading-[0.85] uppercase tracking-tighter">
                Telecom <br/>
                infrastructure is <br/>
                no longer simple.
              </h2>
              
              <h3 className="text-xl font-black text-primary mb-8 uppercase tracking-[0.3em]">The Reality</h3>
              
              <ul className="space-y-6">
                {[
                  "Multi-tenant towers",
                  "Constant upgrade cycles",
                  "Tight regulatory constraints",
                  "Zero tolerance for rework"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-xl text-foreground/80 font-medium">
                    <div className="h-2 w-2 rounded-none bg-primary mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-low rounded-none overflow-hidden border border-border/10">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/hjlmFcwAToROSLdf.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section - "Current workflows are breaking" */}
      <section className="py-48 bg-surface-low">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-surface-lowest rounded-none overflow-hidden border border-border/10">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/TnWnQknlSkMFaotq.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-[0.85] uppercase tracking-tighter">
                Current <br/>
                workflows are <br/>
                breaking.
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8 leading-[1.6] font-medium">
                Traditional site visits, manual measurements, and disconnected spreadsheets can't keep up with 5G rollout demands.
              </p>
              
              <p className="text-xl text-foreground/80 leading-[1.6] font-medium">
                Every day spent waiting for site access is a day of lost revenue. Every error in manual data entry is a future change order.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
