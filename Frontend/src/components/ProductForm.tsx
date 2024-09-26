import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  imageUrl: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().positive('Price must be positive').required('Price is required'),
  countInStock: yup.number().positive('Stock count must be positive').integer('Stock count must be an integer').required('Stock count is required'),
  imageUrl: yup.string().url('Invalid URL').required('Image URL is required'),
});

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<ProductFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          className={`shadow appearance-none border ${errors.name ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          placeholder="Product Name"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          className={`shadow appearance-none border ${errors.description ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          placeholder="Product Description"
        />
        {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          id="price"
          {...register('price')}
          className={`shadow appearance-none border ${errors.price ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="number"
          step="0.01"
          placeholder="Product Price"
        />
        {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countInStock">
          Stock Count
        </label>
        <input
          id="countInStock"
          {...register('countInStock')}
          className={`shadow appearance-none border ${errors.countInStock ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="number"
          placeholder="Stock Count"
        />
        {errors.countInStock && <p className="text-red-500 text-xs italic">{errors.countInStock.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          id="imageUrl"
          {...register('imageUrl')}
          className={`shadow appearance-none border ${errors.imageUrl ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          placeholder="Product Image URL"
        />
        {errors.imageUrl && <p className="text-red-500 text-xs italic">{errors.imageUrl.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
