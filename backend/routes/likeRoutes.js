import express from 'express';
import { getLike, incrementLike } from '../controllers/likeController.js';

const router = express.Router();

router.get('/', getLike);
router.post('/', incrementLike);

export default router;