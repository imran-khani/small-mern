import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes'
import connectDB from './config/db';
import { errorHandler, notFound } from './middleware/middleware';
import { configDotenv } from 'dotenv';

configDotenv()

const app = express()
// PORT
const PORT = process.env.PORT || 5000

// connect to database
connectDB()

// Middleware configuration
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products',productRoutes)

// Errors handling middleware
app.use(notFound)
app.use(errorHandler)

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

