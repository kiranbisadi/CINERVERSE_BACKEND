import express from 'express';
import {
  getFavourites,
  addFavourite,
  updateFavourite,
  replaceFavourite,
  deleteFavourite
} from '../controllers/favouritesController.js';

const router = express.Router();

router.get('/', getFavourites);
router.post('/', addFavourite);
router.patch('/:id', updateFavourite);
router.put('/:id', replaceFavourite);
router.delete('/:id', deleteFavourite);

export default router;