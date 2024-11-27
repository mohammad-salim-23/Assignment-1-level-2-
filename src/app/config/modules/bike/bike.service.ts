import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

//update bike Inventor
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
  //update bike inventory
  const reduceBike = async(id:string,reduceQuantity:number)=>{
    const bike =await Bike.findById(id);

    if(!bike){
        throw new Error("Bike not found");
    }
   if(bike.quantity<reduceQuantity){
    throw new Error("Insufficient stock for the requested quantity");
   }
   const updatedQuantity= bike.quantity - reduceQuantity;
   
   const updateBike = await updateBikeInDB(id,{
    quantity:updatedQuantity,
    isStock:updatedQuantity>0,
   })
   return updateBike ;
  }
export const BikeServices={
    createBikeIntoDB,getAllBikeFromDB, getSingleBikeFromDB,updateBikeInDB,deleteBikeFromDB,reduceBike
}