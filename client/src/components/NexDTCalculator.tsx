import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Info, Download, DollarSign, TrendingUp, Clock, ShieldCheck, Users, Leaf } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

// Default values as per requirements
const DEFAULT_VALUES = {
  numSites: 20000,
  annualColocations: 2000,
  avgColoLicense: 25000,
  wacc: 8,
  revenueAccelDays: 196,
  annualValidations: 3500,
  costPerVisit: 1500,
  climbsAvoided: 1.5,
  engRolesAvoided: 33,
  costPerEngineer: 55000,
  ftrReturnVisitsAvoided: 2.6,
  co2Avoided: 5000,
  carbonPrice: 50,
  analysisHorizon: 5
};

export function NexDTCalculator() {
  // State for all inputs
  const [inputs, setInputs] = useState(DEFAULT_VALUES);
  const [includeCarbon, setIncludeCarbon] = useState(false);
  const [results, setResults] = useState({
    cashflowBenefit: 0,
    operationalSavings: 0,
    engineeringSavings: 0,
    ftrSavings: 0,
    esgValue: 0,
    totalBenefit: 0
  });

  // Handle input changes
  const handleInputChange = (key: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [key]: numValue }));
  };

  const handleSliderChange = (key: string, value: number[]) => {
    setInputs(prev => ({ ...prev, [key]: value[0] }));
  };

  // Calculate results whenever inputs change
  useEffect(() => {
    // 1. Faster Colocation Cashflow (Annual)
    // Annual Colocations × Licence Value × Cost of Capital × (Revenue Acceleration Days ÷ 365)
    const cashflowBenefit = inputs.annualColocations * inputs.avgColoLicense * (inputs.wacc / 100) * (inputs.revenueAccelDays / 365);

    // 2. High-Risk Climb Avoidance (Annualised)
    // (Number of Sites × Climbs Avoided per Site × Cost per Climb) ÷ Analysis Horizon
    // Note: Requirement says "Cost per Climb" but input list has "Cost per physical site visit". Assuming these are the same for this calculation or derived.
    // Let's use costPerVisit as the cost per climb/visit.
    const operationalSavings = (inputs.numSites * inputs.climbsAvoided * inputs.costPerVisit) / inputs.analysisHorizon;

    // 3. Validation Visit Reduction (Annual)
    // Annual Site Validations × Cost per Site Visit
    const validationSavings = inputs.annualValidations * inputs.costPerVisit;
    
    // Total Operational Savings = Climb Avoidance + Validation Reduction
    const totalOperationalSavings = operationalSavings + validationSavings;

    // 4. Engineering Productivity (Annual)
    // Engineering Roles Avoided × Cost per Engineer
    const engineeringSavings = inputs.engRolesAvoided * inputs.costPerEngineer;

    // 5. First-Time-Right (FTR) Improvement (Annualised)
    // (Number of Sites × Return Visits Avoided × Cost per Visit) ÷ Analysis Horizon
    const ftrSavings = (inputs.numSites * inputs.ftrReturnVisitsAvoided * inputs.costPerVisit) / inputs.analysisHorizon;

    // 6. Carbon Reduction (Optional / ESG)
    // (CO₂ Avoided × Carbon Price) ÷ Analysis Horizon
    const esgValue = includeCarbon ? (inputs.co2Avoided * inputs.carbonPrice) / inputs.analysisHorizon : 0;

    // Total Annual Estimated Benefit
    const totalBenefit = cashflowBenefit + totalOperationalSavings + engineeringSavings + ftrSavings + esgValue;

    setResults({
      cashflowBenefit,
      operationalSavings: totalOperationalSavings,
      engineeringSavings,
      ftrSavings,
      esgValue,
      totalBenefit
    });
  }, [inputs, includeCarbon]);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format number
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">NexDT Value Calculator</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Estimate your annual operating and cashflow savings with Next-Generation Digital Twins.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch 
              id="carbon-mode" 
              checked={includeCarbon}
              onCheckedChange={setIncludeCarbon}
            />
            <Label htmlFor="carbon-mode" className="flex items-center gap-2 cursor-pointer">
              <Leaf className="h-4 w-4 text-green-500" />
              Include ESG / Carbon
            </Label>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Summary
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs Section */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1.5 rounded-md"><TrendingUp className="h-5 w-5" /></span>
                Portfolio & Financial Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <LabelWithTooltip label="Number of Sites" tooltip="Total number of towers and rooftops in your portfolio." />
                <Input 
                  type="number" 
                  value={inputs.numSites} 
                  onChange={(e) => handleInputChange('numSites', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Cost of Capital (WACC %)" tooltip="Weighted Average Cost of Capital used for financial calculations." />
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[inputs.wacc]} 
                    max={20} 
                    step={0.5} 
                    onValueChange={(val) => handleSliderChange('wacc', val)}
                    className="flex-1"
                  />
                  <span className="w-12 text-right font-mono">{inputs.wacc}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Annual Colocations" tooltip="Number of new colocations or upgrades per year." />
                <Input 
                  type="number" 
                  value={inputs.annualColocations} 
                  onChange={(e) => handleInputChange('annualColocations', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Avg. Year-1 License ($)" tooltip="Average first-year revenue from a single colocation license." />
                <Input 
                  type="number" 
                  value={inputs.avgColoLicense} 
                  onChange={(e) => handleInputChange('avgColoLicense', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Revenue Acceleration (Days)" tooltip="Days saved in the colocation process using NexDT." />
                <Input 
                  type="number" 
                  value={inputs.revenueAccelDays} 
                  onChange={(e) => handleInputChange('revenueAccelDays', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Analysis Horizon (Years)" tooltip="Time period over which the benefits are amortized." />
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[inputs.analysisHorizon]} 
                    min={1}
                    max={10} 
                    step={1} 
                    onValueChange={(val) => handleSliderChange('analysisHorizon', val)}
                    className="flex-1"
                  />
                  <span className="w-12 text-right font-mono">{inputs.analysisHorizon}y</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <span className="bg-blue-500/10 text-blue-600 p-1.5 rounded-md"><ShieldCheck className="h-5 w-5" /></span>
                Operational Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <LabelWithTooltip label="Annual Site Validations" tooltip="Number of site validation visits performed annually." />
                <Input 
                  type="number" 
                  value={inputs.annualValidations} 
                  onChange={(e) => handleInputChange('annualValidations', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Cost per Site Visit ($)" tooltip="Average fully loaded cost for a physical site visit or climb." />
                <Input 
                  type="number" 
                  value={inputs.costPerVisit} 
                  onChange={(e) => handleInputChange('costPerVisit', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Climbs Avoided / Tower" tooltip="Average number of climbs avoided per tower over the analysis horizon." />
                <Input 
                  type="number" 
                  value={inputs.climbsAvoided} 
                  onChange={(e) => handleInputChange('climbsAvoided', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="FTR Return Visits Avoided" tooltip="Return visits avoided per tower due to First-Time-Right accuracy." />
                <Input 
                  type="number" 
                  value={inputs.ftrReturnVisitsAvoided} 
                  onChange={(e) => handleInputChange('ftrReturnVisitsAvoided', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Separator />

          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <span className="bg-purple-500/10 text-purple-600 p-1.5 rounded-md"><Users className="h-5 w-5" /></span>
                Engineering & ESG
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <LabelWithTooltip label="Eng. Roles Avoided" tooltip="Full-time engineering roles repurposed or avoided." />
                <Input 
                  type="number" 
                  value={inputs.engRolesAvoided} 
                  onChange={(e) => handleInputChange('engRolesAvoided', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <LabelWithTooltip label="Cost per Engineer ($)" tooltip="Annual fully loaded cost of an engineering resource." />
                <Input 
                  type="number" 
                  value={inputs.costPerEngineer} 
                  onChange={(e) => handleInputChange('costPerEngineer', e.target.value)}
                />
              </div>
              
              {includeCarbon && (
                <>
                  <div className="space-y-2">
                    <LabelWithTooltip label="CO₂ Avoided (Tonnes)" tooltip="Total carbon emissions avoided over the analysis horizon." />
                    <Input 
                      type="number" 
                      value={inputs.co2Avoided} 
                      onChange={(e) => handleInputChange('co2Avoided', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <LabelWithTooltip label="Carbon Price ($/Tonne)" tooltip="Internal or market price of carbon per tonne." />
                    <Input 
                      type="number" 
                      value={inputs.carbonPrice} 
                      onChange={(e) => handleInputChange('carbonPrice', e.target.value)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-5">
          <div className="sticky top-8 space-y-6">
            <Card className="bg-slate-900 text-white border-slate-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
              <CardHeader>
                <CardTitle className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Annual Estimated Benefit</CardTitle>
                <div className="mt-2">
                  <motion.div 
                    key={results.totalBenefit}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-white tracking-tight"
                  >
                    {formatCurrency(results.totalBenefit)}
                  </motion.div>
                  <p className="text-slate-400 text-sm mt-2">
                    Based on {inputs.analysisHorizon}-year horizon
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <ResultRow 
                    label="Cashflow Acceleration" 
                    value={results.cashflowBenefit} 
                    icon={<Clock className="h-4 w-4 text-blue-400" />}
                    percent={results.cashflowBenefit / results.totalBenefit * 100}
                  />
                  <ResultRow 
                    label="Operational Savings" 
                    value={results.operationalSavings} 
                    icon={<ShieldCheck className="h-4 w-4 text-green-400" />}
                    percent={results.operationalSavings / results.totalBenefit * 100}
                  />
                  <ResultRow 
                    label="Engineering Productivity" 
                    value={results.engineeringSavings} 
                    icon={<Users className="h-4 w-4 text-purple-400" />}
                    percent={results.engineeringSavings / results.totalBenefit * 100}
                  />
                  <ResultRow 
                    label="FTR Improvement" 
                    value={results.ftrSavings} 
                    icon={<TrendingUp className="h-4 w-4 text-orange-400" />}
                    percent={results.ftrSavings / results.totalBenefit * 100}
                  />
                  {includeCarbon && (
                    <ResultRow 
                      label="ESG / Carbon Value" 
                      value={results.esgValue} 
                      icon={<Leaf className="h-4 w-4 text-emerald-400" />}
                      percent={results.esgValue / results.totalBenefit * 100}
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold mb-4">Calculation Logic</h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <LogicItem 
                  title="Faster Cashflow" 
                  formula="Annual Colos × License × WACC × (Days Saved / 365)" 
                />
                <LogicItem 
                  title="Operational Savings" 
                  formula="(Sites × Climbs Avoided × Cost) / Horizon + (Validations × Cost)" 
                />
                <LogicItem 
                  title="Engineering" 
                  formula="Roles Avoided × Cost per Engineer" 
                />
                <LogicItem 
                  title="FTR Improvement" 
                  formula="(Sites × Return Visits Avoided × Cost) / Horizon" 
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              Results are indicative and based on customer-provided inputs. No assumptions are made for pricing uplift, tenancy growth, or portfolio expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelWithTooltip({ label, tooltip }: { label: string, tooltip: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</Label>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-3.5 w-3.5 text-slate-400 cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function ResultRow({ label, value, icon, percent }: { label: string, value: number, icon: React.ReactNode, percent: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 text-slate-300 text-sm">
          {icon}
          <span>{label}</span>
        </div>
        <span className="font-mono font-medium text-white">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)}
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function LogicItem({ title, formula }: { title: string, formula: string }) {
  return (
    <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-3">
      <div className="font-medium text-slate-900 dark:text-slate-200">{title}</div>
      <div className="font-mono text-xs mt-0.5 opacity-75">{formula}</div>
    </div>
  );
}
