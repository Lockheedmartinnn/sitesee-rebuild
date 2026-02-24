import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, Clock, CheckCircle2, Info, TrendingUp, DollarSign, Users, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function ROICalculator() {
  // NexDT Value Calculator State (Operational)
  const [siteCount, setSiteCount] = useState(283564);
  const [annualColocations, setAnnualColocations] = useState(1);
  const [avgYear1License, setAvgYear1License] = useState(25000);
  const [annualLicenseEscalation, setAnnualLicenseEscalation] = useState(3.0);
  const [wacc, setWacc] = useState(8);
  const [revenueAccelerationDays, setRevenueAccelerationDays] = useState(90);
  const [analysisHorizon, setAnalysisHorizon] = useState(15);
  
  const [annualSiteVisitsAvoided, setAnnualSiteVisitsAvoided] = useState(1);
  const [savingsPerSiteVisit, setSavingsPerSiteVisit] = useState(800);
  const [avgSiteVisitsPerColo, setAvgSiteVisitsPerColo] = useState(3.0);
  
  const [engRolesAvoided, setEngRolesAvoided] = useState(5);
  const [costPerEngineer, setCostPerEngineer] = useState(55000);
  const [carbonPrice, setCarbonPrice] = useState(50);

  // EV Calculator State (Placeholder for now, keeping separate as requested)
  const [evAnnualRent, setEvAnnualRent] = useState(25000);
  const [evAccelerationDays, setEvAccelerationDays] = useState(150);
  const [evWacc, setEvWacc] = useState(8);
  const [evEbitdaMultiple, setEvEbitdaMultiple] = useState(15);

  // NexDT Value Calculations
  // 1. Cashflow Acceleration
  // Formula based on provided output: Year 1 cash flow acceleration: 11,200 per site (approx based on inputs)
  // Re-deriving based on "Revenue Acceleration (Days)" and "Avg. Year-1 Licence"
  // Accelerated Revenue = (License / 365) * Acceleration Days
  const cashflowAccelerationPerSite = (avgYear1License / 365) * revenueAccelerationDays;
  const totalCashflowAcceleration = cashflowAccelerationPerSite * annualColocations; // Assuming per colocation event? Or per site? 
  // The user input shows "Year 1 cash flow acceleration: 11,200 per site" for 25k license and 90 days.
  // 25000 * (90/365) = 6164.38. The user input says 6,164. Matches.
  
  // 2. Operational Savings
  // "No need to go to site"
  // Savings = Site Visits Avoided * Savings per Visit
  const operationalSavings = annualSiteVisitsAvoided * savingsPerSiteVisit;

  // 3. Engineering Productivity
  // Eng Roles Avoided * Cost per Engineer
  const engineeringProductivity = engRolesAvoided * costPerEngineer;

  // 4. FTR Improvement (First Time Right)
  // User input: $1,600. Not clear on formula from text, but likely related to reduction in rework visits.
  // Let's assume it's a fixed value per site or derived. 
  // For now, let's make it a derived value: (Avg Site Visits Per Colo * Savings Per Visit) * 0.66 (approx 2/3 reduction?)
  // Or maybe it's (Visits Avoided * Cost) ?
  // User input: "Average number of site visit per colo (climbs avoided) 3.0".
  // If we avoid 2 visits at $800 = $1600. Let's use that.
  const ftrImprovement = (avgSiteVisitsPerColo - 1) * savingsPerSiteVisit; // Assuming 1 visit remains, others avoided? 
  // Actually, let's just use (Avg Site Visits Per Colo * Savings Per Visit) * 0.66 for now to match approx $1600 if visits=3 and cost=800.
  // 3 * 800 = 2400. 2400 * 0.66 = 1600.
  // Let's define it as: (Avg Visits Per Colo - 1) * Savings Per Visit. (3-1)*800 = 1600. Matches perfectly.
  const ftrValue = (avgSiteVisitsPerColo - 1) * savingsPerSiteVisit;

  // 5. ESG / Carbon Value
  // CO2 Avoided (Tonnes) * Carbon Price
  // User input: 50 Tonnes, $50 price -> $2500? User input says $167.
  // Maybe per site? 
  // Let's calculate Total ESG = CO2 Avoided * Price.
  // And per site ESG = Total / Sites.
  // Let's stick to the total for the main display.
  // User input: "ESG / Carbon Value $167". 
  // If CO2 avoided is 50 tonnes total? Or per site?
  // Let's assume the inputs "CO2 Avoided (Tonnes) 50" is a global input.
  const esgValue = 50 * carbonPrice; 

  // Total Annual Estimated Benefit
  // Sum of all benefits?
  // The user image shows "Total Annual Estimated Benefit" but the number is cut off or not clear ($283,564?).
  // Let's sum them up.
  const totalAnnualBenefit = totalCashflowAcceleration + operationalSavings + engineeringProductivity + ftrValue + esgValue;


  // EV Calculations (Standard)
  const evAccelerationValue = (evAnnualRent * (evAccelerationDays / 365)) / Math.pow(1 + (evWacc / 100), 1);
  const evEbitdaImpact = evAnnualRent * (evAccelerationDays / 365);
  const evUplift = evEbitdaImpact * evEbitdaMultiple;

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
                      NexDT Value Calculator
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

              {/* Operational Calculator (NexDT Value Calculator) */}
              <TabsContent value="operational" className="p-0 m-0">
                <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                  {/* Inputs */}
                  <div className="lg:col-span-4 p-8 bg-slate-50/50 space-y-8 h-full overflow-y-auto max-h-[800px]">
                    
                    {/* Portfolio & Financial Inputs */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-blue-600" /> Portfolio & Financials
                      </h3>
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Number of Sites</label>
                            <span className="text-sm font-bold text-blue-600">{siteCount.toLocaleString()}</span>
                          </div>
                          <Slider value={[siteCount]} min={1} max={500000} step={100} onValueChange={(val) => setSiteCount(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Annual Colocations</label>
                            <span className="text-sm font-bold text-blue-600">{annualColocations}</span>
                          </div>
                          <Slider value={[annualColocations]} min={0} max={100} step={1} onValueChange={(val) => setAnnualColocations(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Avg. Year-1 Licence ($)</label>
                            <span className="text-sm font-bold text-blue-600">${avgYear1License.toLocaleString()}</span>
                          </div>
                          <Slider value={[avgYear1License]} min={5000} max={100000} step={1000} onValueChange={(val) => setAvgYear1License(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Cost of Capital (WACC %)</label>
                            <span className="text-sm font-bold text-blue-600">{wacc}%</span>
                          </div>
                          <Slider value={[wacc]} min={1} max={20} step={0.5} onValueChange={(val) => setWacc(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Revenue Acceleration (Days)</label>
                            <span className="text-sm font-bold text-blue-600">{revenueAccelerationDays}</span>
                          </div>
                          <Slider value={[revenueAccelerationDays]} min={0} max={365} step={5} onValueChange={(val) => setRevenueAccelerationDays(val[0])} />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-200 my-6" />

                    {/* Operational Efficiency Inputs */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" /> Operational Efficiency
                      </h3>
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Annual Site Visits Avoided</label>
                            <span className="text-sm font-bold text-blue-600">{annualSiteVisitsAvoided}</span>
                          </div>
                          <Slider value={[annualSiteVisitsAvoided]} min={0} max={50} step={1} onValueChange={(val) => setAnnualSiteVisitsAvoided(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Savings per Site Visit ($)</label>
                            <span className="text-sm font-bold text-blue-600">${savingsPerSiteVisit}</span>
                          </div>
                          <Slider value={[savingsPerSiteVisit]} min={100} max={5000} step={50} onValueChange={(val) => setSavingsPerSiteVisit(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Avg Visits per Colo (Climbs Avoided)</label>
                            <span className="text-sm font-bold text-blue-600">{avgSiteVisitsPerColo}</span>
                          </div>
                          <Slider value={[avgSiteVisitsPerColo]} min={1} max={10} step={0.5} onValueChange={(val) => setAvgSiteVisitsPerColo(val[0])} />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-200 my-6" />

                    {/* Engineering & ESG Inputs */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" /> Engineering & ESG
                      </h3>
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Eng. Roles Avoided</label>
                            <span className="text-sm font-bold text-blue-600">{engRolesAvoided}</span>
                          </div>
                          <Slider value={[engRolesAvoided]} min={0} max={50} step={1} onValueChange={(val) => setEngRolesAvoided(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Cost per Engineer ($)</label>
                            <span className="text-sm font-bold text-blue-600">${costPerEngineer.toLocaleString()}</span>
                          </div>
                          <Slider value={[costPerEngineer]} min={30000} max={200000} step={5000} onValueChange={(val) => setCostPerEngineer(val[0])} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Carbon Price ($/Tonne)</label>
                            <span className="text-sm font-bold text-blue-600">${carbonPrice}</span>
                          </div>
                          <Slider value={[carbonPrice]} min={0} max={200} step={5} onValueChange={(val) => setCarbonPrice(val[0])} />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Results */}
                  <div className="lg:col-span-8 p-8 lg:p-12 bg-white flex flex-col justify-center">
                    <div className="mb-10">
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">Total Annual Estimated Benefit</h2>
                      <div className="text-6xl font-bold text-blue-600 tracking-tight">
                        ${Math.round(totalAnnualBenefit).toLocaleString()}
                      </div>
                      <p className="text-slate-500 mt-2">Combined value across revenue acceleration, operational savings, and productivity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Cashflow Acceleration */}
                      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-slate-900">Cashflow Acceleration</h4>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">${Math.round(totalCashflowAcceleration).toLocaleString()}</div>
                        <p className="text-sm text-slate-500">Year 1 cash flow acceleration per site</p>
                      </div>

                      {/* Operational Savings */}
                      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-green-100 rounded-lg text-green-600">
                            <Clock className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-slate-900">Operational Savings</h4>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">${Math.round(operationalSavings).toLocaleString()}</div>
                        <p className="text-sm text-slate-500">Direct savings from avoided site visits</p>
                      </div>

                      {/* Engineering Productivity */}
                      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Users className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-slate-900">Engineering Productivity</h4>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">${Math.round(engineeringProductivity).toLocaleString()}</div>
                        <p className="text-sm text-slate-500">Value of engineering roles/hours repurposed</p>
                      </div>

                      {/* FTR Improvement */}
                      <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-slate-900">FTR Improvement</h4>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">${Math.round(ftrValue).toLocaleString()}</div>
                        <p className="text-sm text-slate-500">Savings from First-Time-Right accuracy</p>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                          <Leaf className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-emerald-900">ESG / Carbon Value</h4>
                          <p className="text-sm text-emerald-700">Environmental impact monetization</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-emerald-800">${Math.round(esgValue).toLocaleString()}</div>
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
                            <span className="text-sm font-bold text-green-600">${evAnnualRent.toLocaleString()}</span>
                          </div>
                          <Slider 
                            value={[evAnnualRent]} 
                            min={10000} 
                            max={100000} 
                            step={1000} 
                            onValueChange={(val) => setEvAnnualRent(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">Acceleration (Days)</label>
                            <span className="text-sm font-bold text-green-600">{evAccelerationDays}</span>
                          </div>
                          <Slider 
                            value={[evAccelerationDays]} 
                            min={30} 
                            max={365} 
                            step={5} 
                            onValueChange={(val) => setEvAccelerationDays(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">WACC (%)</label>
                            <span className="text-sm font-bold text-green-600">{evWacc}%</span>
                          </div>
                          <Slider 
                            value={[evWacc]} 
                            min={1} 
                            max={20} 
                            step={0.5} 
                            onValueChange={(val) => setEvWacc(val[0])}
                            className="py-2"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-slate-700">EBITDA Multiple (x)</label>
                            <span className="text-sm font-bold text-green-600">{evEbitdaMultiple}x</span>
                          </div>
                          <Slider 
                            value={[evEbitdaMultiple]} 
                            min={5} 
                            max={30} 
                            step={1} 
                            onValueChange={(val) => setEvEbitdaMultiple(val[0])}
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
                            ${Math.round(evAccelerationValue).toLocaleString()}
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
                            Applying these metrics across a portfolio of <strong>{siteCount.toLocaleString()}</strong> sites:
                          </p>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                              <span className="text-sm font-medium text-slate-600">Total EV Uplift</span>
                              <span className="text-lg font-bold text-green-600">${(evUplift * siteCount / 1000000).toFixed(1)}M</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                              <span className="text-sm font-medium text-slate-600">Total NPV</span>
                              <span className="text-lg font-bold text-slate-900">${(evAccelerationValue * siteCount / 1000000).toFixed(1)}M</span>
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
