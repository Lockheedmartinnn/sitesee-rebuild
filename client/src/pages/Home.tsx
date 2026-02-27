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
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/ffsUPZvEPSLQQVKy.mp4" type="video/mp4" />
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

      {/* Edinburgh Rooftop Showcase Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <video 
                  controls
                  className="w-full h-auto rounded-2xl"
                  poster="/edinburgh-poster.jpg"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/IwJzNuBTvKycaiKm.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Edinburgh Rooftop Analysis</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                See how SiteSee transforms complex urban rooftop environments into clear, actionable digital twins. Our AI automatically identifies equipment, measures dimensions, and detects potential structural issues without a single site visit.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Automated equipment inventory",
                  "Millimeter-accurate measurements",
                  "Remote structural integrity assessment",
                  "Seamless integration with existing workflows"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                View Full Case Study
              </Button>
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
