import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function FlightsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Spring animation for the main counter
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2.5
  });

  // Derived value for display
  const displayValue = useTransform(springValue, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(3000);
    }
  }, [isInView, springValue]);

  return (
    <section ref={ref} className="py-24 bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left: The Big Number */}
          <div className="flex-1 text-center md:text-left">
            <div className="relative inline-block">
              <motion.span 
                className="text-[120px] md:text-[160px] lg:text-[200px] font-display font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
              >
                <motion.span>{displayValue}</motion.span>
                <span className="text-blue-500">+</span>
              </motion.span>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 left-2 md:left-4 text-xl md:text-2xl font-medium text-blue-400 tracking-widest uppercase"
              >
                Remote Site Visits
              </motion.div>
            </div>
          </div>

          {/* Right: Context & Growth */}
          <div className="flex-1 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Production scale. <br/>
                <span className="text-slate-400">Not a pilot.</span>
              </h3>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-md">
                NexDT is running in live production environments, managing critical infrastructure decisions every single day.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">YoY Growth</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">18 mo</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Live Operations</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
