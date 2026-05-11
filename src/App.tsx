import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FormModalProvider } from "@/components/site/TrialFormModal";
import Index from "./pages/Index.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FormModalProvider>
        <Toaster />
        <Sonner />
        <Index />
      </FormModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
