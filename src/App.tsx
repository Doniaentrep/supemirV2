import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormationProvider } from "@/contexts/FormationContext";
import { Suspense, lazy } from "react";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProgramDetail = lazy(() => import("./pages/ProgramDetail"));
const FormationRapideDetail = lazy(() => import("./pages/FormationRapideDetail"));
const Certificat = lazy(() => import("./pages/Certificat"));
const CertificatDetail = lazy(() => import("./pages/CertificatDetail"));
const Entreprise = lazy(() => import("./pages/Entreprise"));
const BootcampMarketingDigital = lazy(() => import("./pages/BootcampMarketingDigital"));
const Bootcamp3D = lazy(() => import("./pages/Bootcamp3D"));
const Licence = lazy(() => import("./pages/Licence"));
const Master = lazy(() => import("./pages/Master"));
const MBA = lazy(() => import("./pages/MBA"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FormationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/diplome/:type/:program" element={<ProgramDetail />} />
              <Route path="/formation-certifiee/:formation" element={<FormationRapideDetail />} />
              <Route path="/formation/:formation" element={<FormationRapideDetail />} />
              <Route path="/certificat" element={<Certificat />} />
              <Route path="/certificat/:certificat" element={<CertificatDetail />} />
              {/* /diplome route removed */}
              <Route path="/entreprise" element={<Entreprise />} />
              <Route path="/bootcamp-marketing-digital" element={<BootcampMarketingDigital />} />
              <Route path="/bootcamp-3d" element={<Bootcamp3D />} />
              <Route path="/licence" element={<Licence />} />
              <Route path="/master" element={<Master />} />
              <Route path="/mba" element={<MBA />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </FormationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
