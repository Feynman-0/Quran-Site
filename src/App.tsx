import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FemaleQuranTeacher from "./pages/FemaleQuranTeacher.tsx";
import QuranForKids from "./pages/QuranForKids.tsx";
import QuranWithTajweed from "./pages/QuranWithTajweed.tsx";
import QuranMemorization from "./pages/QuranMemorization.tsx";
import QuranReading from "./pages/QuranReading.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/female-quran-teacher" element={<FemaleQuranTeacher />} />
          <Route path="/quran-classes-for-kids" element={<QuranForKids />} />
          <Route path="/learn-quran-with-tajweed" element={<QuranWithTajweed />} />
          <Route path="/quran-memorization" element={<QuranMemorization />} />
          <Route path="/quran-reading" element={<QuranReading />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
