import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import favouritesRoutes from './routes/favouritesRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/favourites', favouritesRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));