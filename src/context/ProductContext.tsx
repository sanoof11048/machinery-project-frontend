// src/context/ProductContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import axiosInstance from '../api/axiosInstance';
import type { Product } from '../types';


interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  selectProduct: (product: Product) => void;
  clearSelectedProduct: () => void;
  fetchProducts: () => void;
}

const ProductContext = createContext<ProductContextType>({
    products: [],
    loading: true,
  error: null,
  selectedProduct: null,
  selectProduct: () => { },
  clearSelectedProduct: () => { },
  fetchProducts: () => { },
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.get('/products');
      setProducts(res.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchProducts();
    setProducts(mockProducts)
  }, []);

  const selectProduct = (product: Product) => setSelectedProduct(product);
  const clearSelectedProduct = () => setSelectedProduct(null);

  const mockProducts: Product[] = [
  {
    id: 'inj-001',
    name: 'Injection Moulding Machine 250T',
    category: 'Injection Moulding',
    image: '/machines/Injection Moulding.png',
    shortDescription: 'High-precision 250-ton injection moulding machine with servo motor drive',
    description: '250-ton injection moulding machine suitable for high-volume plastic production with precise control and energy efficiency.',
    fullDescription:
      'Professional-grade 250-ton injection moulding machine featuring advanced servo motor technology, precise temperature control, and energy-efficient operation. Ideal for automotive, consumer goods, and packaging applications.',
    features: [
      'Servo motor drive system',
      'Advanced PLC control',
      'Energy efficient design',
      'Precise temperature control',
      'Safety interlocks'
    ],
    applications: [
      'Automotive components',
      'Consumer products',
      'Packaging materials',
      'Electronic housings'
    ],
    tonnage: '250 Tons',
    energyRating: 'A+',
    price: 1250000, // ₹
    availableUpgrades: ['PLC Upgrade', 'Servo Retrofit', 'Safety Systems'],
    specifications: {
      'Clamping Force': '250 Tons',
      'Shot Weight': '850g',
      'Screw Diameter': '45mm',
      'Max Daylight': '520mm',
      'Tie Bar Distance': '480 x 480mm'
    }
  },
  {
    id: 'blow-001',
    name: 'Blow Moulding Machine 5L',
    category: 'Blow Moulding',
    image: '/machines/Blow Moulding.png',
    shortDescription: 'Automatic blow moulding machine for 5L containers with multi-layer capability',
    description: 'Automatic 5L blow moulding machine with multi-layer co-extrusion and high efficiency production.',
    fullDescription:
      'State-of-the-art automatic blow moulding machine capable of producing up to 5L containers with multi-layer co-extrusion technology. Perfect for industrial containers, automotive tanks, and large packaging applications.',
    features: [
      'Multi-layer co-extrusion',
      'Automatic operation',
      'Quick mold changeover',
      'Energy efficient heating',
      'Quality monitoring system'
    ],
    applications: [
      'Industrial containers',
      'Automotive fuel tanks',
      'Chemical storage',
      'Food packaging'
    ],
    capacity: '5L Max Volume',
    energyRating: 'A',
    price: 950000, // ₹
    availableUpgrades: ['Advanced Controls', 'Multi-layer System', 'Automation Package'],
    specifications: {
      'Max Container Volume': '5L',
      'Production Rate': '120 pcs/hr',
      'Extruder Size': '65mm',
      'Mold Stations': '2',
      'Power Consumption': '45 kW'
    }
  },
  {
    id: 'cnc-001',
    name: 'CNC Machining Center VMC-850',
    category: 'CNC Machines',
    image: 'machines/CNC Machining.png',
    shortDescription: 'Vertical machining center with 850mm travel and 4th axis capability',
    description: '850mm travel vertical CNC machine for complex and precision parts, with optional 4th axis.',
    fullDescription:
      'High-precision vertical machining center with 850mm X-Y travel, featuring rigid construction, advanced spindle technology, and optional 4th axis rotary table. Ideal for precision manufacturing and complex part production.',
    features: [
      'Rigid cast iron construction',
      'High-speed spindle',
      '4th axis ready',
      'Tool changer (24 tools)',
      'Flood coolant system'
    ],
    applications: [
      'Precision manufacturing',
      'Aerospace components',
      'Medical devices',
      'Die and mold making'
    ],
    capacity: '850mm Travel',
    energyRating: 'B+',
    price: 1800000, // ₹
    availableUpgrades: ['4th Axis Rotary', 'High-Speed Spindle', 'Advanced Probing'],
    specifications: {
      'X-Axis Travel': '850mm',
      'Y-Axis Travel': '450mm',
      'Z-Axis Travel': '450mm',
      'Spindle Speed': '8000 RPM',
      'Tool Capacity': '24 Tools'
    }
  },
  {
    id: 'vmc-001',
    name: 'Vertical Machining Center VMP-1200',
    category: 'Vertical Machining',
    image: 'machines/Vertical Machining.png',
    shortDescription: '1200mm travel vertical machining center for heavy-duty applications',
    description: 'Heavy-duty VMC with 1200mm travel designed for large parts and continuous production.',
    fullDescription:
      'Heavy-duty vertical machining center with 1200mm travel capacity, designed for large part machining and high-volume production. Features robust construction and advanced control systems.',
    features: [
      'Heavy-duty construction',
      'Large work envelope',
      'Advanced CNC control',
      'Automatic tool changer',
      'Coolant management system'
    ],
    applications: [
      'Heavy machinery parts',
      'Large molds',
      'Industrial equipment',
      'Power generation components'
    ],
    capacity: '1200mm Travel',
    energyRating: 'B',
    price: 2200000, // ₹
    availableUpgrades: ['Pallet Changer', 'High-Pressure Coolant', 'Spindle Upgrade'],
    specifications: {
      'X-Axis Travel': '1200mm',
      'Y-Axis Travel': '600mm',
      'Z-Axis Travel': '600mm',
      'Max Load': '2000kg',
      'Spindle Power': '15kW'
    }
  },
  {
    id: 'press-001',
    name: 'Power Press Machine 100T',
    category: 'Power Press',
    image: '/machines/Industrial Power.png',
    shortDescription: '100-ton power press with mechanical drive and safety features',
    description: 'Robust 100-ton power press suitable for stamping and cutting operations with safety systems.',
    fullDescription:
      'Reliable 100-ton mechanical power press designed for stamping, forming, and cutting operations. Features safety systems, adjustable stroke, and robust construction for industrial applications.',
    features: [
      'Mechanical drive system',
      'Safety light curtains',
      'Adjustable stroke length',
      'Emergency stop systems',
      'Overload protection'
    ],
    applications: [
      'Metal stamping',
      'Sheet forming',
      'Punching operations',
      'Industrial components'
    ],
    tonnage: '100 Tons',
    energyRating: 'B+',
    price: 850000, // ₹
    availableUpgrades: ['Servo Drive', 'Advanced Safety', 'Automation Integration'],
    specifications: {
      'Press Force': '100 Tons',
      'Bed Size': '1000 x 600mm',
      'Stroke Length': '120mm',
      'Strokes per Minute': '45',
      'Motor Power': '7.5kW'
    }
  },
  {
    id: 'robot-001',
    name: 'Industrial Robot 6-Axis',
    category: 'Robots',
    image: '/machines/Industrial Robot.png',
    shortDescription: '6-axis industrial robot for moulding machine automation',
    description: '6-axis articulated robot designed for high-speed moulding operations and automation integration.',
    fullDescription:
      '6-axis articulated industrial robot designed specifically for injection moulding automation. Features precise positioning, high payload capacity, and integrated safety systems.',
    features: [
      '6-axis articulated arm',
      'High precision positioning',
      'Safety rated systems',
      'Easy programming',
      'Multiple I/O options'
    ],
    applications: [
      'Part removal',
      'Insert placement',
      'Quality inspection',
      'Packaging automation'
    ],
    capacity: '20kg Payload',
    energyRating: 'A',
    price: 1450000, // ₹
    availableUpgrades: ['Vision System', 'Force Control', 'Advanced Programming'],
    specifications: {
      'Payload': '20kg',
      'Reach': '1800mm',
      'Repeatability': '±0.05mm',
      'Axes': '6',
      'Controller': 'Advanced CNC'
    }
  }
];

  return (
    <ProductContext.Provider
      value={{ products, loading, error, selectedProduct, selectProduct, clearSelectedProduct, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);