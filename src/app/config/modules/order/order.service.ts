import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async(orderData:TOrder)=>{
    const result = await Order.create(orderData);
    return result;
}
const getOrderFromDB=async()=>{
    const result = await Order.find();
    return result;
}
const calculateTotalRevenue=async()=>{
    const result = await Order.aggregate([
        {
            $group:{
                _id:null,
                totalRevenue:{
                    $sum:"$totalPrice"
                }
            }
        }
    ]);
    //retrn total revenue , default to 0 if no order exist
    return result.length>0?result[0].totalRevenue:0;
}
export const OrderServices={
    createOrderIntoDB,calculateTotalRevenue,getOrderFromDB
}