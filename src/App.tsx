import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormationProvider } from "@/contexts/FormationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/ProgramDetail";
import FormationRapideDetail from "./pages/FormationRapideDetail";
import Certificat from "./pages/Certificat";
import CertificatDetail from "./pages/CertificatDetail";
import Diplome from "./pages/Diplome";
import Entreprise from "./pages/Entreprise";
import FormationLanding from "./pages/FormationLanding";
import BootcampMarketingDigital from "./pages/BootcampMarketingDigital";
import Licence from "./pages/Licence";
import Master from "./pages/Master";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FormationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diplome/:type/:program" element={<ProgramDetail />} />
            <Route path="/formation-certifiee/:formation" element={<FormationRapideDetail />} />
            <Route path="/certificat" element={<Certificat />} />
            <Route path="/certificat/:certificat" element={<CertificatDetail />} />
            <Route path="/diplome" element={<Diplome />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/formation/:formationSlug" element={<FormationLanding />} />
            <Route path="/bootcamp-marketing-digital" element={<BootcampMarketingDigital />} />
            <Route path="/licence" element={<Licence />} />
            <Route path="/master" element={<Master />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FormationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
