import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Telco from "./pages/industries/Telco";
import NexDT from "./pages/products/NexDT";
import IEA from "./pages/products/IEA";
import IEME from "./pages/products/IEME";
import BIM from "./pages/products/BIM";
import AIAnalysis from "./pages/products/AIAnalysis";
import Capture from "./pages/products/Capture";
import ScalePoints from "./pages/products/ScalePoints";
import PilotCompanion from "./pages/products/PilotCompanion";
import AIBoost from "./pages/products/AIBoost";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

import ROICalculator from "./pages/ROICalculator";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/industries/telco"} component={Telco} />
        <Route path={"/products/nexdt"} component={NexDT} />
        <Route path={"/products/iea"} component={IEA} />
        <Route path={"/products/ieme"} component={IEME} />
        <Route path={"/products/bim"} component={BIM} />
        <Route path={"/products/ai-analysis"} component={AIAnalysis} />
        <Route path={"/products/capture"} component={Capture} />
        <Route path={"/products/scale-points"} component={ScalePoints} />
        <Route path={"/products/pilot-companion"} component={PilotCompanion} />

        
        <Route path={"/roi-calculator"} component={ROICalculator} />
        <Route path={"/company"} component={Company} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
