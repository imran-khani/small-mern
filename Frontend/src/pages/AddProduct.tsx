import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { addProduct } from '../services/productService';
import { ProductFormData } from '../components/ProductForm';
import { toast } from 'react-hot-toast';

const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProduct = async (data: ProductFormData) => {
    try {
      await addProduct(data);
      toast.success('Product added successfully!');
      navigate('/'); // Navigate to home or product listing page after success
    } catch (error) {
      toast.error('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProduct;
