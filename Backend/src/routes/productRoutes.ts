import express from 'express';
import { getProducts, getProductById } from '../controllers/productController';

const router = express.Router();

// Use the function references without parentheses
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;