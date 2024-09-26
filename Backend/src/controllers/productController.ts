import { Request, Response } from "express";
import Product, { IProduct } from "../models/productModel";

// @desc  Get all products
// @route Get /api/products
// @access public

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get product by ID
// @route Get /api/products/:id
// @access public

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, countInStock, imageUrl } = req.body;

    // Validate the required fields
    if (!name || !description || !price || !countInStock || !imageUrl) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const newProduct: IProduct = new Product({
      name,
      description,
      price,
      countInStock,
      imageUrl
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error:any) {

    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
