import express from 'express';
import { BikeControllers } from '../bike/bike.controller';
import { OrderControllers } from './order.controller';
const router = express.Router();


router.post('/orders',OrderControllers.createOrder)
export const OrderRoutes = router;

// 6744c764ed6f21571ab7e92b