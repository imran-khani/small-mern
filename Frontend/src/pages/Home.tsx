import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../context/productContext';
import { getProducts } from '../services/productService';

const Home: React.FC = () => {
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, [setProducts]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            _id={product._id}
            countInStock={product.countInStock}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
