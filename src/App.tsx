import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Institution from "./pages/about/Institution.tsx";
import VisionMission from "./pages/about/VisionMission.tsx";
import Leadership from "./pages/about/Leadership.tsx";
import Departments from "./pages/academics/Departments.tsx";
import Auto from "./pages/academics/Auto.tsx";
import Mech from "./pages/academics/Mech.tsx";
import CSE from "./pages/academics/CSE.tsx";
import ECE from "./pages/academics/ECE.tsx";
import EEE from "./pages/academics/EEE.tsx";
import Programmes from "./pages/academics/Programmes.tsx";
import UGAdmissions from "./pages/admissions/UGAdmissions.tsx";
import Research from "./pages/Research.tsx";
import Placement from "./pages/Placement.tsx";
import StudentLife from "./pages/StudentLife.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import AntiDrugCell from "./pages/AntiDrugCell.tsx";
import AicteApprovals from "./pages/AicteApprovals.tsx";
import Admin from "./pages/Admin.tsx";


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
          <Route path="/about/institution" element={<Institution />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/academics/departments" element={<Departments />} />
          <Route path="/academics/departments/auto" element={<Auto />} />
          <Route path="/academics/departments/mech" element={<Mech />} />
          <Route path="/academics/departments/cse" element={<CSE />} />
          <Route path="/academics/departments/aiml" element={<CSE />} />
          <Route path="/academics/departments/ece" element={<ECE />} />
          <Route path="/academics/departments/eee" element={<EEE />} />
          <Route path="/academics/programmes" element={<Programmes />} />
          <Route path="/admissions/ug" element={<UGAdmissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aicte-approvals" element={<AicteApprovals />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/anti-drug-cell" element={<AntiDrugCell />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
