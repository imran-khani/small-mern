import axios from "axios";
import { Product } from "../types";


const API_URL = import.meta.env.VITE_API_URL as string || 'http://localhost:5000/api'



export const getProducts = async () => {
    const response = await axios.get(API_URL);
    // Ensure the data is an array
    return Array.isArray(response.data) ? response.data : [];
  };

export const getProductById = async (productId:string)=>{
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
         console.error(error)
    }
}

export const addProduct = async (productData: {
    name: string;
    description: string;
    price: number;
    countInStock: number;
    imageUrl: string;
  }) => {
    const response = await axios.post(API_URL, productData);
    return response.data;
  };