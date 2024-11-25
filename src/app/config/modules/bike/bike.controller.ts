import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async(req:Request,res:Response)=>{
    try{
     
        const result = await BikeServices.createBikeIntoDB(req.body);
        return res.status(200).json({
            message: "Bike created successfully",
            status: true,
          
            data: result,
          });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
        return res.status(500).json({
            success: false,
            message:error.message|| "Internal Server Error",
            error: error instanceof Error ? error.message : error,
          });
    }
}
const getAllBike = async(req:Request,res:Response)=>{
    try{
         const result = await BikeServices.getAllBikeFromDB();
         return res.status(200).json({
            message: "Bikes retrieved successfully",
            stats: true,
            data: result,
          });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : error,
          });
    }
}
export const BikeControllers={
    createBike,getAllBike
}