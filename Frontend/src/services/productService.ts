import axios from "axios";


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