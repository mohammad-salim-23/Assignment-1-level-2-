import express from 'express';

import { OrderControllers } from './order.controller';
const router = express.Router();


router.post('/orders',OrderControllers.createOrder);
router.get('/orders/revenue',OrderControllers.getAllOrders);

export const OrderRoutes = router;

// 6744c764ed6f21571ab7e92b