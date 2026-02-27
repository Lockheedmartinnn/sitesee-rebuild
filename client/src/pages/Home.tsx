import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2, Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
      
      {/* Hero Section with Video Background */}
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
            poster="/hero-poster.jpg" // Add a poster image if available
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/WWIySGXvDveoWmug.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-Powered Digital Twin Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 animate-fade-in-up delay-100">
            Visualize Your Assets <br/> Like Never Before
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Transform physical infrastructure into intelligent digital assets. Accelerate revenue, optimize operations, and reduce carbon footprint with SiteSee's precision 3D modeling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="/calculators.html" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 rounded-full px-8 backdrop-blur-sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                ROI Calculator
              </Button>
            </a>
          </div>

          {/* Video Controls (Optional) */}
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

      {/* Features Grid */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose SiteSee?</h2>
            <p className="text-slate-400 text-lg">Our platform delivers unmatched precision and actionable insights for tower companies and mobile network operators.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-500" />,
                title: "Global Accessibility",
                desc: "Access your entire portfolio from anywhere in the world with our cloud-native platform."
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-500" />,
                title: "Accelerated Revenue",
                desc: "Reduce time-to-revenue by up to 150 days with automated workflows and digital approvals."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-emerald-500" />,
                title: "Precision Accuracy",
                desc: "Engineering-grade 3D models accurate to within millimeters, enabling remote structural analysis."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900 group">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 bg-slate-950 rounded-xl w-fit border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
            <p className="text-slate-400 text-lg">See what our partners say about transforming their operations with SiteSee.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "SiteSee's digital twin technology has revolutionized how we manage our tower assets. The accuracy is incredible.",
                author: "Sarah Jenkins",
                role: "CTO, TowerCo Global"
              },
              {
                quote: "We reduced our site visits by 70% and accelerated our 5G rollout significantly thanks to the remote analysis capabilities.",
                author: "Michael Chen",
                role: "Director of Operations, NextGen Mobile"
              },
              {
                quote: "The ability to visualize and analyze our entire portfolio from a single dashboard is a game-changer for our engineering team.",
                author: "David Rodriguez",
                role: "VP of Engineering, InfraStructure Inc."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-950 border-slate-800 p-6">
                <CardContent className="pt-6">
                  <div className="mb-4 text-blue-500">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Portfolio Map Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Global Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Visualize Your Entire Portfolio</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                From a single tower to a nationwide network, SiteSee provides a unified geospatial view of all your assets. Track status, identify issues, and manage maintenance schedules on an interactive 3D map.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time asset status tracking",
                  "Geospatial filtering and search",
                  "Integrated weather and terrain data",
                  "Direct access to digital twins from map view"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full">
                Explore the Map
              </Button>
            </div>
            <div className="relative h-[400px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl group">
              {/* Placeholder for Map Visualization */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              {/* Interactive Elements Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-slate-950/80 backdrop-blur-md border border-blue-500/50 p-4 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-white font-bold text-sm">Site ID: UK-LON-042</span>
                    </div>
                    <div className="text-xs text-slate-400">Status: Operational</div>
                    <div className="text-xs text-slate-400">Last Scan: 2 days ago</div>
                  </div>
                </div>
              </div>
              
              {/* Map Controls UI Mockup */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="w-8 h-8 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer">+</div>
                <div className="w-8 h-8 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer">-</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Digitize Your Portfolio?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Join leading tower companies and MNOs who are already saving millions with SiteSee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 rounded-full text-lg font-semibold shadow-lg shadow-blue-900/20">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 rounded-full px-10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; 2026 SiteSee. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
