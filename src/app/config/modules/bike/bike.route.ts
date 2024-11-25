import express from 'express';
import { BikeControllers } from './bike.controller';

const router = express.Router();

router.post('/products',BikeControllers.createBike);
router.get('/products',BikeControllers.getAllBike)
router.get('/products/:productId',BikeControllers.getSingleBike)
export const BikeRoutes = router;