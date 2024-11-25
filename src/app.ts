import cors from "cors";
import express, { Application, Request, Response } from 'express';
import { BikeRoutes } from "./app/config/modules/bike/bike.route";
const app:Application= express();

//parser
app.use(express.json());
app.use(cors());
//application routes
app.use('/api',BikeRoutes);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;