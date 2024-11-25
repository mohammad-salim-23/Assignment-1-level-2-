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
export const BikeServices={
    createBikeIntoDB,getAllBikeFromDB
}