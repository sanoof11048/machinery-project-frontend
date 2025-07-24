import { Routes, Route } from 'react-router-dom';
import Header from '../components/Home/components/Header';
import ProductDetail from '../components/Home/components/ProductDetail';
import Footer from '../components/Home/components/Footer';
import Home from '../components/Home/pages/Home';
import ProductsPage from '../components/Products/pages/Products';


function HomeRoutes() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductDetail />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default HomeRoutes;
