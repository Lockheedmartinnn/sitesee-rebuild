import React from 'react';
import EBITDACalculator from '@/components/EBITDACalculator';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            EBITDA & <span className="text-primary">Enterprise Value</span> Calculator
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quantify the financial impact of NexDT on your infrastructure portfolio. 
            See how accelerating revenue and improving efficiency drives enterprise value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EBITDACalculator />
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to realize this value?</h3>
          <p className="text-muted-foreground mb-8">
            Schedule a consultation with our solution architects to validate these assumptions for your specific portfolio.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center h-12 px-8 rounded-none bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
          >
            Book a Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}
