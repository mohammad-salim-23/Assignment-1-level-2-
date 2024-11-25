import express from 'express';
import { BikeControllers } from './bike.controller';

const router = express.Router();

router.post('/products',BikeControllers.createBike);
router.get('/products',BikeControllers.getAllBike)
export const BikeRoutes = router;