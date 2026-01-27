import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = "/images/hero-drone-tower.jpg",
  className,
  children 
}: PageHeaderProps) {
  return (
    <div className={cn("relative py-24 md:py-32 overflow-hidden bg-black text-white", className)}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="pt-4 animate-fade-in-up delay-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
