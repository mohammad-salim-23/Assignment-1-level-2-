import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import { Bike } from "./bike.model";
import bikeValidationSchema from "./bike.validation";

const createBike = async(req:Request,res:Response)=>{
    try{
     
      const bike = req.body;
      const zodparsedData = bikeValidationSchema.parse(bike.Bike);
      const result = await BikeServices.createBikeIntoDB(zodparsedData);
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
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
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
    }catch(error:any){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : error,
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
          });
    }
}
const getSingleBike = async(req:Request,res:Response)=>{
    try{
        const{productId} = req.params;
        const result = await BikeServices.getSingleBikeFromDB(productId);
        return res.status(200).json({
            message: "Bike retrieved successfully",
            status: true,
            data: result,
          });
    }
    catch (error:any) {
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
          error: error instanceof Error ? error.message : error,
          stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        });
      }
}
const updateBike = async(req:Request,res:Response)=>{
  try{
    const {productId} = req.params;
    const updatedData = req.body.Bike;
    const result = await BikeServices.updateBikeInDB(productId,updatedData);
    return res.status(200).json({
      message: "Bike updated successfully",
      success: true,
      data: result,
  });
  }catch(error:any){
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : error,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
  }
}
const deleteBike=async(req:Request,res:Response)=>{
  try{
        const {productId} = req.params;const result = await BikeServices.deleteBikeFromDB(productId);
        return res.status(200).json({
          message: "Bike deleted successfully",
          status: true,
          data: result,
        });
  }catch(error:any){
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : error,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
export const BikeControllers={
    createBike,getAllBike,getSingleBike ,updateBike ,deleteBike
}