import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, role, company, className, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full bg-slate-50 dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-8 flex flex-col h-full">
          <Quote className="h-8 w-8 text-primary/20 mb-6" />
          <blockquote className="flex-1 text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
            "{quote}"
          </blockquote>
          <div className="mt-auto">
            <div className="font-semibold text-slate-900 dark:text-white">{author}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{role}</div>
            {company && <div className="text-sm text-primary font-medium mt-1">{company}</div>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      quote: "Once you can actually see the current state of the tower and trust it, everything else becomes easier. Engineering decisions, commercial conversations, customer discussions all start from a position of certainty instead of assumption.",
      author: "Nick Clarke",
      role: "CEO",
      company: "FortySouth"
    },
    {
      quote: "That single insight saved us the best part of four hundred thousand dollars and nearly paid for a year of the digital twin programme on its own.",
      author: "Nick Clarke",
      role: "CEO",
      company: "FortySouth"
    },
    {
      quote: "In about fifteen minutes you have a high-confidence view on whether it’s going to work. Compared to processes that used to take weeks or months, that’s a material shift.",
      author: "Nick Clarke",
      role: "CEO",
      company: "FortySouth"
    },
    {
      quote: "What stood out about SiteSee early on was that they understood the telco industry. They understood where our pain points were and how our workflows actually operate.",
      author: "Ting Wang",
      role: "Head of Engineering",
      company: "FortySouth"
    },
    {
      quote: "We could see that this wasn’t just a newer version of the same thing. It fundamentally changed what we could do with the twin.",
      author: "David Alemann",
      role: "Head of Digital Twin Programme",
      company: "FortySouth"
    },
    {
      quote: "What really stands out to me is that this isn’t a digital twin hidden behind a firewall. This is a platform your customers are using directly to design and understand their colocation.",
      author: "Lucio Piccoli",
      role: "Industry Moderator",
      company: "Webinar Host"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from executives and engineers who have transformed their operations with SiteSee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={index}
              {...t}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
