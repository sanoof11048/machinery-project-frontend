import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
// import OruxWebsite from './components/Sample';

function App() {

    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (selectedProduct) {
    return (
      <>
        <Header />
        <ProductDetail
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
        <Footer />
      </>
    );
  }
  return (
       <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection/>
      <ProductsSection onProductSelect={setSelectedProduct} />
      <ServicesSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
      {/* <OruxWebsite/> */}
    </div>
  )
}

export default App
