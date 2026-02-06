import { Play } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Featured Customer Story
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
              Transforming Operations at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Forty South</span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Discover how Forty South New Zealand leveraged SiteSee's digital twin ecosystem to revolutionize their tower management.
            </p>

            <div className="flex flex-col gap-4 border-l-2 border-slate-800 pl-6">
              <div>
                <div className="font-bold text-lg text-white">Nick Clarke</div>
                <div className="text-slate-500">Chief Executive Officer</div>
              </div>
              <div>
                <div className="font-bold text-lg text-white">David Allemann</div>
                <div className="text-slate-500">Head of Digital Platforms</div>
              </div>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-900/20">
            <div className="aspect-video relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg" // We might need to generate a poster or just let it load
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663319993959/opyiAruPiuefrHQX.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Play className="w-6 h-6 text-white fill-current ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
