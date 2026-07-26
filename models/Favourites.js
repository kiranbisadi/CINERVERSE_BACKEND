import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  movieId: { type: Number, required: true, unique: true },
  title: String,
  poster: String,
});

export default mongoose.model('Favourites', favouriteSchema);