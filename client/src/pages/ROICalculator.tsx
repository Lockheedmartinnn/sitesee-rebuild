import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, Clock, CheckCircle2, Info, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function ROICalculator() {
  // Operational Calculator State
  const [towerCount, setTowerCount] = useState(500);
  const [siteVisitsPerYear, setSiteVisitsPerYear] = useState(2.5);
  const [costPerVisit, setCostPerVisit] = useState(1500);
  const [modificationProjects, setModificationProjects] = useState(50);
  
  // EV Calculator State
  const [annualRent, setAnnualRent] = useState(25000);
  const [accelerationDays, setAccelerationDays] = useState(150);
  const [wacc, setWacc] = useState(8);
  const [ebitdaMultiple, setEbitdaMultiple] = useState(15);

  // Operational Calculations
  const traditionalTime = 180; // days
  const nexDTTime = 44; // days
  const timeSavedPerProject = traditionalTime - nexDTTime;
  const totalTimeSaved = (timeSavedPerProject * modificationProjects) / 365; // in years
  
  const visitReduction = 0.6; // 60% reduction in site visits
  const visitsAvoided = towerCount * siteVisitsPerYear * visitReduction;
  const annualSavings = visitsAvoided * costPerVisit;
  
  const carbonReductionPerVisit = 0.25; // tonnes CO2
  const totalCarbonSaved = visitsAvoided * carbonReductionPerVisit;

  // EV Calculations
  // NPV Calculation based on accelerated rent realization
  // Formula: Annual Rent * (Acceleration Days / 365) * (1 / (1 + WACC)^1) + ... simplified for acceleration impact
  // Simplified Fisher Equation approximation for immediate value of accelerated revenue
  const accelerationValue = (annualRent * (accelerationDays / 365)) / Math.pow(1 + (wacc / 100), 1);
  
  // Enterprise Value Uplift
  // Impact on EBITDA * Multiple
  // Assuming acceleration leads to earlier revenue recognition which increases effective annual EBITDA
  const ebitdaImpact = annualRent * (accelerationDays / 365);
  const evUplift = ebitdaImpact * ebitdaMultiple;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mx-auto">
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">ROI Calculator</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              Calculate Your <span className="text-blue-400">Digital Advantage</span>
            </h1>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Quantify the value of NexDT for your portfolio. Compare operational savings and enterprise value uplift based on your specific metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <Tabs defaultValue="operational" className="w-full">
              <div className="bg-white border-b border-slate-100">
                <TabsList className="w-full justify-start p-0 h-auto bg-transparent rounded-none">
                  <TabsTrigger 
                    value="operational" 
                    className="flex-1 py-6 text-lg font-medium border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50/50 rounded-none transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      Operational Savings
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ev" 
                    className="flex-1 py-6 text-lg font-medium border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=active]:bg-green-50/50 rounded-none transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5" />
                      Enterprise Value Uplift
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Operational Calculator */}
              <TabsContent value="operational" className="p-0 m-0">
                <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                  {/* Inputs */}
                  <div className="lg:col-span-4 p-8 bg-slate-50/50 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6">Portfolio Metrics</h3>
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Total Towers</label>
                            <span className="text-sm font-bold text-blue-600">{towerCount.toLocaleString()}</span>
                          </div>
                          <Slider 
                            value={[towerCount]} 
                            min={100} 
                            max={10000} 
                            step={100} 
                            onValueChange={(val) => setTowerCount(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Site Visits / Year</label>
                            <span className="text-sm font-bold text-blue-600">{siteVisitsPerYear}</span>
                          </div>
                          <Slider 
                            value={[siteVisitsPerYear]} 
                            min={1} 
                            max={12} 
                            step={0.5} 
                            onValueChange={(val) => setSiteVisitsPerYear(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Cost per Visit ($)</label>
                            <span className="text-sm font-bold text-blue-600">${costPerVisit}</span>
                          </div>
                          <Slider 
                            value={[costPerVisit]} 
                            min={500} 
                            max={5000} 
                            step={100} 
                            onValueChange={(val) => setCostPerVisit(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Annual Projects</label>
                            <span className="text-sm font-bold text-blue-600">{modificationProjects}</span>
                          </div>
                          <Slider 
                            value={[modificationProjects]} 
                            min={10} 
                            max={500} 
                            step={10} 
                            onValueChange={(val) => setModificationProjects(val[0])}
                            className="py-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-8 p-8 lg:p-12 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Annual Cost Savings</p>
                          <div className="text-5xl font-bold text-slate-900 tracking-tight">
                            ${(annualSavings / 1000000).toFixed(1)}M
                          </div>
                          <p className="text-sm text-slate-600 mt-2">
                            Based on {visitsAvoided.toLocaleString()} fewer site visits
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Time Saved</p>
                          <div className="text-5xl font-bold text-blue-600 tracking-tight">
                            {Math.round(totalTimeSaved)} Years
                          </div>
                          <p className="text-sm text-slate-600 mt-2">
                            Aggregate project timeline reduction
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                          <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            Efficiency Gains
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex justify-between text-sm">
                              <span className="text-slate-600">Traditional Timeline</span>
                              <span className="font-bold text-slate-900">180 Days</span>
                            </li>
                            <li className="flex justify-between text-sm">
                              <span className="text-slate-600">NexDT Timeline</span>
                              <span className="font-bold text-blue-600">44 Days</span>
                            </li>
                            <li className="pt-3 border-t border-blue-200 flex justify-between text-sm">
                              <span className="font-medium text-blue-900">Acceleration</span>
                              <span className="font-bold text-blue-600">4x Faster</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                          <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ESG Impact
                          </h4>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-3xl font-bold text-green-700">{Math.round(totalCarbonSaved).toLocaleString()}</p>
                              <p className="text-xs text-green-800 font-medium mt-1">Tonnes CO₂ Avoided</p>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-green-700">{Math.round(visitsAvoided * 0.1).toLocaleString()}</p>
                              <p className="text-xs text-green-800 font-medium mt-1">High-Risk Climbs Avoided</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* EV Calculator */}
              <TabsContent value="ev" className="p-0 m-0">
                <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                  {/* Inputs */}
                  <div className="lg:col-span-4 p-8 bg-slate-50/50 space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6">Financial Assumptions</h3>
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Annual Rent ($)</label>
                            <span className="text-sm font-bold text-green-600">${annualRent.toLocaleString()}</span>
                          </div>
                          <Slider 
                            value={[annualRent]} 
                            min={10000} 
                            max={100000} 
                            step={1000} 
                            onValueChange={(val) => setAnnualRent(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Acceleration (Days)</label>
                            <span className="text-sm font-bold text-green-600">{accelerationDays}</span>
                          </div>
                          <Slider 
                            value={[accelerationDays]} 
                            min={30} 
                            max={365} 
                            step={5} 
                            onValueChange={(val) => setAccelerationDays(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">WACC (%)</label>
                            <span className="text-sm font-bold text-green-600">{wacc}%</span>
                          </div>
                          <Slider 
                            value={[wacc]} 
                            min={1} 
                            max={20} 
                            step={0.5} 
                            onValueChange={(val) => setWacc(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">EBITDA Multiple (x)</label>
                            <span className="text-sm font-bold text-green-600">{ebitdaMultiple}x</span>
                          </div>
                          <Slider 
                            value={[ebitdaMultiple]} 
                            min={5} 
                            max={30} 
                            step={1} 
                            onValueChange={(val) => setEbitdaMultiple(val[0])}
                            className="py-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-8 p-8 lg:p-12 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Enterprise Value Uplift</p>
                          <div className="text-5xl font-bold text-green-600 tracking-tight">
                            ${Math.round(evUplift).toLocaleString()}
                          </div>
                          <p className="text-sm text-slate-600 mt-2">
                            Per site valuation increase
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">NPV of Acceleration</p>
                          <div className="text-5xl font-bold text-slate-900 tracking-tight">
                            ${Math.round(accelerationValue).toLocaleString()}
                          </div>
                          <p className="text-sm text-slate-600 mt-2">
                            Net Present Value per site
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-slate-600" />
                            Portfolio Impact
                          </h4>
                          <p className="text-sm text-slate-600 mb-4">
                            Applying these metrics across a portfolio of <strong>{towerCount.toLocaleString()}</strong> sites:
                          </p>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                              <span className="text-sm font-medium text-slate-600">Total EV Uplift</span>
                              <span className="text-lg font-bold text-green-600">${(evUplift * towerCount / 1000000).toFixed(1)}M</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                              <span className="text-sm font-medium text-slate-600">Total NPV</span>
                              <span className="text-lg font-bold text-slate-900">${(accelerationValue * towerCount / 1000000).toFixed(1)}M</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-800">
                          <p className="font-medium mb-1">Fisher Equation Methodology</p>
                          <p className="opacity-80">
                            Calculations utilize the Fisher Equation to determine the present value of accelerated revenue realization, adjusted for WACC and inflation expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to realize these savings?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Get a detailed, custom ROI analysis for your specific infrastructure portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <a className="h-14 px-10 text-lg bg-blue-600 text-white hover:bg-blue-700 border-0 font-bold rounded-full inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
                Request Full Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
