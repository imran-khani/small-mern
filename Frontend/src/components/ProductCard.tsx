import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductProps extends Product{}

const ProductCard: React.FC<ProductProps> = ({ name, description, price, imageUrl,_id }) => {

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/${_id}`)
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4" 
     onClick={handleClick}
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <p className="text-blue-500 font-bold mt-2">${price}</p>
    </div>
  );
};

export default ProductCard;
