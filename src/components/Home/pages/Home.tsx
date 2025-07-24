import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import ServicesSection from '../components/ServicesSection'
import IndustriesSection from '../components/IndustriesSection'
import ContactSection from '../components/ContactSection'
import { Phone } from 'lucide-react'

function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ProductsSection/>
            <ServicesSection />
            <IndustriesSection />
            <ContactSection />
            <div className="fixed bottom-8 right-8 z-40">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110 animate-bounce">
                    <Phone size={24} />
                </button>
            </div>
        </>
    )
}

export default Home