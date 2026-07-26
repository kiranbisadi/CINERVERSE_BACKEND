import Favourite from '../models/Favourites.js';

export const getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find();
    res.json(favourites)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
};

export const addFavourite = async (req, res) => {
  try {
    const newFavourite = await Favourite.create(req.body);
    res.status(201).json({ newFavourite });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const updateFavourite = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await Favourite.findOneAndUpdate(
      { movieId: id }, req.body, { new: true }
    );
    if (!updated)
      return res.status(404).json({ message: `Favourite ${id} not found` });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const replaceFavourite = async (req, res) => {
  const id = req.params.id;
  try {
    const replaced = await Favourite.findOneAndReplace(
      { movieId: id }, { ...req.body, movieId: Number(id) }, { new: true }
    );
    if (!replaced) return res.status(404).json({ message: `Favourite ${id} not found` });
    res.json(replaced);
  }catch(err){
    res.status(400).json({message: err.message});
  }
};

export const deleteFavourite = async (req, res) => {
  try {
    const deleted = await Favourite.findOneAndDelete({ movieId: req.params.id });
    if (!deleted) return res.status(404).json({ message: `Favourite ${req.params.id} not found` });
    res.status(200).json({ message: `Deleted favourite ${req.params.id}` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};