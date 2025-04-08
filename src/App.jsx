import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/home components/Hero';
import ProductShowcase from './components/home components/ProductShowcase';
import Features from './components/home components/Features';
import Mission from './components/home components/Mission';
import Statistics from './components/home components/Statistics';
import Chatbot from './components/Chatbot';
import TrustIndicators from './components/home components/TrustIndicators';
import Contact from './components/home components/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowWeWork from './components/home components/HowWeWork';
import JobsPage from './pages/JobsPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={
              <main className="w-full overflow-hidden">
                <Hero />
                <ProductShowcase />
                <HowWeWork />
                <Features />
                <Mission />
                <Statistics />
                <TrustIndicators />
                <Contact />
              </main>
            } />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;