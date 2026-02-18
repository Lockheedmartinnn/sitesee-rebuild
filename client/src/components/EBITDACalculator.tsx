import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Percent, BarChart3, TrendingUp, Building2, Clock, ArrowRight } from "lucide-react";

export default function EBITDACalculator() {
  // Inputs
  const [numSites, setNumSites] = useState(1);
  const [annualRent, setAnnualRent] = useState(25000);
  const [operatingMargin, setOperatingMargin] = useState(80);
  const [accelerationDays, setAccelerationDays] = useState(90);
  const [ebitdaMultiple, setEbitdaMultiple] = useState(15);
  const [operationalSavings, setOperationalSavings] = useState(800);
  const [ftrImprovement, setFtrImprovement] = useState(1600);

  // Calculated Values
  const [ebitdaRevenueAcceleration, setEbitdaRevenueAcceleration] = useState(0);
  const [ebitdaOperationalSavings, setEbitdaOperationalSavings] = useState(0);
  const [ebitdaFtr, setEbitdaFtr] = useState(0);
  const [totalAnnualEbitda, setTotalAnnualEbitda] = useState(0);
  const [enterpriseValueUplift, setEnterpriseValueUplift] = useState(0);

  useEffect(() => {
    // Calculation Logic
    
    // 1. EBITDA from Revenue Acceleration
    // Formula: (Annual Rent / 365) * Acceleration Days * (Operating Margin / 100) * Num Sites
    const revenueAccel = (annualRent / 365) * accelerationDays * (operatingMargin / 100) * numSites;
    setEbitdaRevenueAcceleration(revenueAccel);

    // 2. EBITDA from Operational Savings
    // Formula: Operational Savings * Num Sites
    const opSavings = operationalSavings * numSites;
    setEbitdaOperationalSavings(opSavings);

    // 3. EBITDA from FTR Improvement
    // Formula: FTR Improvement * Num Sites
    const ftr = ftrImprovement * numSites;
    setEbitdaFtr(ftr);

    // 4. Total Annual EBITDA
    const totalEbitda = revenueAccel + opSavings + ftr;
    setTotalAnnualEbitda(totalEbitda);

    // 5. Enterprise Value Uplift
    // Formula: Total Annual EBITDA * EBITDA Multiple
    const evUplift = totalEbitda * ebitdaMultiple;
    setEnterpriseValueUplift(evUplift);

  }, [numSites, annualRent, operatingMargin, accelerationDays, ebitdaMultiple, operationalSavings, ftrImprovement]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Inputs Section */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Calculator Inputs
              </CardTitle>
              <CardDescription>Adjust the parameters to see the impact.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Number of Sites */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="numSites" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    Number of Sites
                  </Label>
                  <Input 
                    id="numSites" 
                    type="number" 
                    value={numSites} 
                    onChange={(e) => setNumSites(Number(e.target.value))}
                    className="w-24 h-8 text-right font-mono"
                  />
                </div>
                <Slider 
                  value={[numSites]} 
                  min={1} 
                  max={10000} 
                  step={1} 
                  onValueChange={(vals) => setNumSites(vals[0])}
                  className="py-2"
                />
              </div>

              <Separator />

              {/* Annual Rent */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="annualRent" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    Annual Rent per Site
                  </Label>
                  <Input 
                    id="annualRent" 
                    type="number" 
                    value={annualRent} 
                    onChange={(e) => setAnnualRent(Number(e.target.value))}
                    className="w-28 h-8 text-right font-mono"
                  />
                </div>
                <Slider 
                  value={[annualRent]} 
                  min={1000} 
                  max={100000} 
                  step={100} 
                  onValueChange={(vals) => setAnnualRent(vals[0])}
                />
              </div>

              {/* Operating Margin */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="operatingMargin" className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-muted-foreground" />
                    Operating Margin (%)
                  </Label>
                  <div className="flex items-center gap-1">
                    <Input 
                      id="operatingMargin" 
                      type="number" 
                      value={operatingMargin} 
                      onChange={(e) => setOperatingMargin(Number(e.target.value))}
                      className="w-20 h-8 text-right font-mono"
                    />
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                </div>
                <Slider 
                  value={[operatingMargin]} 
                  min={0} 
                  max={100} 
                  step={1} 
                  onValueChange={(vals) => setOperatingMargin(vals[0])}
                />
              </div>

              {/* Acceleration Days */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="accelerationDays" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    Acceleration Days
                  </Label>
                  <Input 
                    id="accelerationDays" 
                    type="number" 
                    value={accelerationDays} 
                    onChange={(e) => setAccelerationDays(Number(e.target.value))}
                    className="w-20 h-8 text-right font-mono"
                  />
                </div>
                <Slider 
                  value={[accelerationDays]} 
                  min={0} 
                  max={365} 
                  step={1} 
                  onValueChange={(vals) => setAccelerationDays(vals[0])}
                />
              </div>

              <Separator />

              {/* EBITDA Multiple */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="ebitdaMultiple" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    EBITDA Multiple
                  </Label>
                  <Input 
                    id="ebitdaMultiple" 
                    type="number" 
                    value={ebitdaMultiple} 
                    onChange={(e) => setEbitdaMultiple(Number(e.target.value))}
                    className="w-20 h-8 text-right font-mono"
                  />
                </div>
                <Slider 
                  value={[ebitdaMultiple]} 
                  min={1} 
                  max={50} 
                  step={0.5} 
                  onValueChange={(vals) => setEbitdaMultiple(vals[0])}
                />
              </div>

              {/* Operational Savings */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="operationalSavings" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    Ops Savings (Annual)
                  </Label>
                  <Input 
                    id="operationalSavings" 
                    type="number" 
                    value={operationalSavings} 
                    onChange={(e) => setOperationalSavings(Number(e.target.value))}
                    className="w-24 h-8 text-right font-mono"
                  />
                </div>
              </div>

              {/* FTR Improvement */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="ftrImprovement" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    FTR Improvement (Annual)
                  </Label>
                  <Input 
                    id="ftrImprovement" 
                    type="number" 
                    value={ftrImprovement} 
                    onChange={(e) => setFtrImprovement(Number(e.target.value))}
                    className="w-24 h-8 text-right font-mono"
                  />
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Total Annual EBITDA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground tracking-tight">
                  {formatCurrency(totalAnnualEbitda)}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Across {numSites} site{numSites !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary-foreground/80">Enterprise Value Uplift</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight">
                  {formatCurrency(enterpriseValueUplift)}
                </div>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  Based on {ebitdaMultiple}x Multiple
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>EBITDA Breakdown</CardTitle>
              <CardDescription>Detailed analysis of value drivers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Revenue Acceleration */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-medium">Revenue Acceleration</div>
                    <div className="text-sm text-muted-foreground">
                      {accelerationDays} days faster time-to-revenue
                    </div>
                  </div>
                  <div className="text-xl font-mono font-semibold text-primary">
                    {formatCurrency(ebitdaRevenueAcceleration)}
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${(ebitdaRevenueAcceleration / totalAnnualEbitda) * 100}%` }}
                  />
                </div>
              </div>

              {/* Operational Savings */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-medium">Operational Savings</div>
                    <div className="text-sm text-muted-foreground">
                      Reduced site visits & admin overhead
                    </div>
                  </div>
                  <div className="text-xl font-mono font-semibold text-primary">
                    {formatCurrency(ebitdaOperationalSavings)}
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500 ease-out"
                    style={{ width: `${(ebitdaOperationalSavings / totalAnnualEbitda) * 100}%` }}
                  />
                </div>
              </div>

              {/* FTR Improvement */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-medium">FTR Improvement</div>
                    <div className="text-sm text-muted-foreground">
                      First Time Right design & build
                    </div>
                  </div>
                  <div className="text-xl font-mono font-semibold text-primary">
                    {formatCurrency(ebitdaFtr)}
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-500 ease-out"
                    style={{ width: `${(ebitdaFtr / totalAnnualEbitda) * 100}%` }}
                  />
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Summary Text */}
          <div className="bg-muted/30 p-4 rounded-lg border border-border/50 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              By accelerating revenue realization by <span className="font-medium text-foreground">{accelerationDays} days</span> and improving operational efficiency, 
              NexDT delivers a total annual EBITDA impact of <span className="font-medium text-foreground">{formatCurrency(totalAnnualEbitda)}</span>. 
              At a <span className="font-medium text-foreground">{ebitdaMultiple}x</span> multiple, this translates to 
              <span className="font-medium text-foreground"> {formatCurrency(enterpriseValueUplift)}</span> in additional Enterprise Value.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
