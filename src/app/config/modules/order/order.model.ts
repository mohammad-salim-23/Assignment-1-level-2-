import { model, Schema, Types } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";


const orderSchema = new Schema<TOrder>({
    email:{type:String, required:true},
    product:{type:Schema.Types.ObjectId,ref:'Bike',required:true},
    quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
},{timestamps: true})
export const Order = model<TOrder,OrderModel>('Order',orderSchema);