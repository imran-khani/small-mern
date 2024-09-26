import { Request, Response } from "express";
import Product from "../models/productModel";

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

// @desc get products by id
// @route /api/products/:id
// @access public

export const getProductsById = async (req:Request, res:Response) {
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
    }
