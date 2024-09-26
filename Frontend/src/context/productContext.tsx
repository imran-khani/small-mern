import React, { useState, createContext, useContext, ReactNode } from 'react';
import { Product } from '../types'; // Verify this path

// Define the context type
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Create the context with an initial value of undefined
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Custom hook to use the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

// Provider component to wrap around components that need the context
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
