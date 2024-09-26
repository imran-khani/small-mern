import express from 'express'
import cors from 'cors'
import mongoose from  'mongoose';
import db from './config/db'

const app = express()

app.use(express.json());
app.use(cors());



