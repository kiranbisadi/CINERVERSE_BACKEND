let favourites = [];

export const getFavourites = (req, res) => {
  res.json(favourites);
};

export const addFavourite = (req, res) => {
  const newFavourite = req.body;
  favourites.push(newFavourite);
  res.status(201).json(newFavourite);
};

export const updateFavourite = (req, res) => {
  const id = req.params.id;
  const favourite = favourites.find(fav => fav.movieId == id);

  if (!favourite) {
    return res.status(404).json({ message: `Favourite ${id} not found` });
  }

  Object.assign(favourite, req.body);
  res.status(200).json(favourite);
};

export const replaceFavourite = (req, res) => {
  const id = req.params.id;
  const index = favourites.findIndex(fav => fav.movieId == id);

  if (index === -1) {
    return res.status(404).json({ message: `Favourite ${id} not found` });
  }

  favourites[index] = { ...req.body, movieId: Number(id) };
  res.json(favourites[index]);
};

export const deleteFavourite = (req, res) => {
  const id = req.params.id;
  const index = favourites.findIndex(fav => fav.movieId == id);

  if (index === -1) {
    return res.status(404).json({ message: `Favourite ${id} not found` });
  }

  favourites.splice(index, 1);
  res.status(200).json({ message: `Deleted favourite ${id}` });
};