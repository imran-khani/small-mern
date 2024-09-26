import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL as string || 'http://localhost:5000/api'


export const getProducts = async ()=>{
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
         console.error(error)
    }
}

export const getProductById = async (productId:string)=>{
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
         console.error(error)
    }
}