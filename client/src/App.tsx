import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NexDT from "./pages/products/NexDT";
import BIM from "./pages/products/BIM";
import IEME from "./pages/products/IEME";
import IEA from "./pages/products/IEA";
import Capture from "./pages/products/Capture";
import ScalePoints from "./pages/products/ScalePoints";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/nexdt" component={NexDT} />
      <Route path="/products/bim" component={BIM} />
      <Route path="/products/ieme" component={IEME} />
      <Route path="/products/iea" component={IEA} />
      <Route path="/products/capture" component={Capture} />
      <Route path="/products/scalepoints" component={ScalePoints} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
