// App.tsx
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomeRoutes from './Routes/HomeRoutes';
import { ProductProvider } from './context/ProductContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <HomeRoutes />
      </ProductProvider>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
