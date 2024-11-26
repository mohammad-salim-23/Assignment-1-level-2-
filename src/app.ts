import cors from "cors";
import express, { Application, Request, Response } from 'express';
import { BikeRoutes } from "./app/config/modules/bike/bike.route";
import { OrderRoutes } from "./app/config/modules/order/order.route";
const app:Application= express();

//parser
app.use(express.json());
app.use(cors());
//application routes
app.use('/api',BikeRoutes);
app.use('/api',OrderRoutes)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;