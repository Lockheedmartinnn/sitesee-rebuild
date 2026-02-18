import React from 'react';
import { NexDTCalculator } from '@/components/NexDTCalculator';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Calculate Your <span className="text-primary">NexDT ROI</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Discover the financial impact of Next-Generation Digital Twins on your infrastructure portfolio. 
            Quantify savings across operational efficiency, engineering productivity, and revenue acceleration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <NexDTCalculator />
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to realize these savings?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Schedule a consultation with our solution architects to validate these assumptions for your specific portfolio.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
          >
            Book a Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}
