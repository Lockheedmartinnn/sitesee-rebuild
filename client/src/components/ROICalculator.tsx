import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [towerCount, setTowerCount] = useState(1000);
  
  // Assumptions based on industry averages
  const costPerVisit = 1500; // Average cost per site visit
  const visitsPerYear = 2; // Average visits per year per tower
  const reductionFactor = 0.4; // 40% reduction in site visits with Digital Twin
  const timeSavedPerProject = 12; // Hours saved per project
  const engineeringRate = 150; // Hourly rate for engineering

  // Calculations
  const annualVisitSavings = Math.round(towerCount * visitsPerYear * costPerVisit * reductionFactor);
  const annualTimeSavings = Math.round(towerCount * timeSavedPerProject * engineeringRate);
  const totalSavings = annualVisitSavings + annualTimeSavings;
  const carbonSaved = Math.round(towerCount * visitsPerYear * reductionFactor * 0.15); // 0.15 tonnes CO2 per visit

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}k`;
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">ROI Calculator</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
              Calculate your potential <span className="text-blue-500">efficiency gains.</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              See how much you could save by digitizing your portfolio with NexDT. Based on real customer data from over 36,000 towers.
            </p>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Number of Towers</label>
                  <span className="text-3xl font-bold text-white">{towerCount.toLocaleString()}</span>
                </div>
                <Slider
                  defaultValue={[1000]}
                  max={10000}
                  min={100}
                  step={100}
                  value={[towerCount]}
                  onValueChange={(value) => setTowerCount(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>100</span>
                  <span>10,000+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl border border-blue-500/30 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <DollarSign className="w-32 h-32" />
              </div>
              <p className="text-blue-100 font-medium mb-2">Estimated Annual Savings</p>
              <p className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                {formatCurrency(totalSavings)}
              </p>
              <p className="text-sm text-blue-200 opacity-80">
                Combined operational and engineering efficiency gains per year.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{annualTimeSavings > 1000000 ? formatCurrency(annualTimeSavings) : formatCurrency(annualTimeSavings)}</p>
                <p className="text-sm text-slate-400">Engineering Time Value</p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{carbonSaved.toLocaleString()} t</p>
                <p className="text-sm text-slate-400">CO₂ Emissions Avoided</p>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-xs text-slate-500 mb-4">
                *Estimates based on industry averages. Actual results may vary.
              </p>
              <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                Get a Detailed Analysis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
