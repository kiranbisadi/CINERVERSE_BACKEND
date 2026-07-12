import express from 'express';
import favouritesRoutes from './routes/favouritesRoutes.js';

const app = express();
app.use(express.json());

app.use('/favourites', favouritesRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));