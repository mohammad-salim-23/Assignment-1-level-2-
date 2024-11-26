import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async(bikeData:TBike)=>{
    const result = await Bike.create(bikeData);
    return result;
}
const getAllBikeFromDB=async()=>{
    const result = await Bike.find();
    return result;
}
const getSingleBikeFromDB=async(id:string)=>{
    const result = await Bike.findById(id);
    return result;
}
const updateBikeInDB = async(id:string, updatedData:Partial<TBike>)=>{
    const result = await Bike.findByIdAndUpdate(id,updatedData,{
        new:true,
        runValidators:true
    })
    return result;
}
const deleteBikeFromDB=async(id:string)=>{
    const result = await Bike.deleteOne({_id:id});
    return result;
  }
export const BikeServices={
    createBikeIntoDB,getAllBikeFromDB, getSingleBikeFromDB,updateBikeInDB,deleteBikeFromDB
}