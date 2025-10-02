
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AdminProvider } from "./contexts/AdminContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import QuotationCalculator from "./pages/QuotationCalculator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminQuotationDetail from "./pages/AdminQuotationDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/quotation/:id" element={
                <ProtectedRoute>
                  <AdminQuotationDetail />
                </ProtectedRoute>
              } />
              
              {/* Public Routes */}
              <Route path="/*" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:productId" element={<ProductDetail />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/quotation" element={<QuotationCalculator />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
