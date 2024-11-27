/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { OrderServices } from "./order.service";
import { Types } from "mongoose"; // Correct usage of `Types`
import { BikeServices } from "../bike/bike.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;

    // Data validation using Zod
    const zodParsedData = orderValidationSchema.parse(order);

    // Convert product to `Types.ObjectId`
    const parsedOrderData = {
      ...zodParsedData,
      product: new Types.ObjectId(zodParsedData.product),
    };
   await BikeServices.reduceBike( parsedOrderData.product.toString(), parsedOrderData.quantity);
   
    const result = await OrderServices.createOrderIntoDB(parsedOrderData);
    res.status(200).json({
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error: error instanceof Error ? error.message : error,
    });
  }
};
const getAllOrders=async(req:Request,res:Response)=>{
  try{
 const result = await OrderServices.getOrderFromDB();
  //calculate total revenue using aggregation
  const totalRevenue=await OrderServices.calculateTotalRevenue();
 return res.status(200).json({
  status:true,
  message: "Orders and revenue retrieved successfully",
  data:{
   
    totalRevenue
  }
 })
 
  }catch(error:any){

    return res.status(500).json({
      status: false,
      message: "Something wrong",
      error: error instanceof Error ? error.message : error,
    });
  }
}
export const OrderControllers = {
  createOrder,getAllOrders
};
