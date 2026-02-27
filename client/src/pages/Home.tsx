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
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              TRUSTED BY 36,000+ TOWERS GLOBALLY
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
              AI Powered <br/>
              <span className="text-blue-500">Digital Twins</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-light">
              Unlock the true value of your infrastructure. Accelerate upgrades, reduce costs, and optimize assets with the industry's most advanced digital twin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 rounded-full text-lg font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
                Explore NexDT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-500 text-white hover:bg-white/10 h-14 rounded-full px-8 text-lg backdrop-blur-sm">
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
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="text-[12rem] font-bold leading-none tracking-tighter text-white flex items-center">
                3,000
                <span className="text-blue-500 ml-2">+</span>
              </div>
              <div className="text-2xl font-medium text-blue-400 tracking-widest uppercase mt-4 ml-2">
                Remote Site Visits
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Production scale. <br/>
                <span className="text-slate-500">Not a pilot.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-12">
                NexDT is running in live production environments, managing critical infrastructure decisions every single day.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">150%</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">YoY Growth</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">18 mo</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Live Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - "Most digital twins don't move the numbers" */}
      <section className="py-32 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6">THE PROBLEM</div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
                Most digital <br/>
                twins don't <br/>
                move the <br/>
                numbers.
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                They improve visibility. They reduce some site visits. They make inspection easier. 
                <strong className="text-slate-900 block mt-2">But for most tower owners, the underlying workflows, costs, and timelines remain largely unchanged.</strong>
              </p>
              
              <div className="border-l-4 border-blue-600 pl-6 py-2 mb-10">
                <p className="text-2xl font-medium text-slate-800 italic">
                  "Better pictures alone do not reduce cost or accelerate revenue."
                </p>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                NexDT is different. It's a next-generation digital twin designed to reduce operating cost, accelerate revenue, and enable wireless infrastructure portfolios to scale without proportional increases in complexity or headcount.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Digital Twin Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-lg font-medium">
                    Embedded in upgrade, colocation, engineering, and compliance workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid - "Proven at scale" */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Proven at scale.</h2>
            <p className="text-xl text-slate-600">
              NexDT is used in live production environments by customers managing more than <strong className="text-slate-900">36,000 towers and rooftops globally.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "44 Days", label: "Upgrade Approval", sub: "Reduced from 8 months", color: "text-blue-600" },
              { value: "80%", label: "First Time Right", sub: "Improved from 32%", color: "text-emerald-600" },
              { value: "5K+", label: "Tonnes", sub: "CO₂ Avoided Across the estate", color: "text-purple-600" },
              { value: "30K+", label: "Climbs Avoided", sub: "High-risk climbs", color: "text-orange-600" }
            ].map((metric, i) => (
              <Card key={i} className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full justify-center">
                  <div className={`text-5xl font-bold mb-4 ${metric.color}`}>{metric.value}</div>
                  <div className="text-xl font-bold text-slate-900 mb-2">{metric.label}</div>
                  <div className="text-slate-500">{metric.sub}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Story - Forty South */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-medium mb-12">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Featured Customer Story
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Transforming <br/>
                Operations at <span className="text-blue-500">Forty South</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Discover how Forty South New Zealand leveraged SiteSee's digital twin ecosystem to revolutionize their tower management.
              </p>
              
              <div className="border-l-2 border-slate-800 pl-6 space-y-8">
                <div>
                  <div className="text-xl font-bold text-white mb-1">Nick Clarke</div>
                  <div className="text-slate-500">Chief Executive Officer</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1">David Allemann</div>
                  <div className="text-slate-500">Head of Digital Platforms</div>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop" 
                  alt="Forty South Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4 text-white/50 font-bold text-xl">descript</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - "Trusted by Industry Leaders" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-600">Hear from executives and engineers who have transformed their operations with SiteSee.</p>
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
              <Card key={i} className="border border-slate-100 shadow-lg hover:shadow-xl transition-shadow p-8 h-full flex flex-col">
                <div className="text-blue-200 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900 text-lg">{t.author}</div>
                  <div className="text-blue-600 font-medium">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - "Trusted Globally" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Trusted Globally</h2>
            <p className="text-xl text-slate-600">Deployed across major tower operators and infrastructure providers worldwide</p>
          </div>
          
          <div className="relative w-full aspect-[2/1] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
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
                  <div className="h-8 w-8 text-blue-600 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 7 13s7-7.75 7-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-1 bg-black/20 blur-sm rounded-full"></div>
                </div>
              </div>
            ))}
            
            {/* Map Controls */}
            <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg border border-slate-200 p-1 flex flex-col gap-1">
              <button className="p-2 hover:bg-slate-50 rounded text-slate-600 font-bold">+</button>
              <div className="h-px bg-slate-200 w-full"></div>
              <button className="p-2 hover:bg-slate-50 rounded text-slate-600 font-bold">-</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Section - "Telecom infrastructure is no longer simple" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12 leading-tight">
                Telecom <br/>
                infrastructure is <br/>
                no longer simple.
              </h2>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8">The Reality</h3>
              
              <ul className="space-y-6">
                {[
                  "Multi-tenant towers",
                  "Constant upgrade cycles",
                  "Tight regulatory constraints",
                  "Zero tolerance for rework"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-xl text-slate-600">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/home/ubuntu/upload/search_images/cOmq6v4M0lp6.png" 
                  alt="Complex Tower Infrastructure" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section - "Current workflows are breaking" */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/home/ubuntu/upload/search_images/CxmUas5g0s8E.png" 
                  alt="Meeting Room Workflow" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Current <br/>
                workflows are <br/>
                breaking.
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Traditional site visits, manual measurements, and disconnected spreadsheets can't keep up with 5G rollout demands.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Every day spent waiting for site access is a day of lost revenue. Every error in manual data entry is a future change order.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
