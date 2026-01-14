import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import DomesticTours from "@/pages/domestic";
import InternationalTours from "@/pages/international";
import TransportServices from "@/pages/transport";
import Contact from "@/pages/contact";
import PackageDetail from "@/pages/package-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/domestic" component={DomesticTours} />
      <Route path="/international" component={InternationalTours} />
      <Route path="/transport" component={TransportServices} />
      <Route path="/contact" component={Contact} />
      <Route path="/package/:id" component={PackageDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="traviax-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
