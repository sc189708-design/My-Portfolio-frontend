import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loder";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectsDetails";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, []);

  if (loading) return <Loader />;
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App;