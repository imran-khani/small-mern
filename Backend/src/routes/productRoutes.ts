import express from 'express';
import { getProducts, getProductById,createProduct } from '../controllers/productController';

const router = express.Router();

// Use the function references without parentheses
router.route('/')
  .get(getProducts)
  .post(createProduct); // Added .post(createProduct) to the route
router.route('/:id').get(getProductById);

export default router;