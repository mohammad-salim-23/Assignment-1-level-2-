import { Model, Types } from "mongoose";

export type TOrder = {
  email: string; 
  product: Types.ObjectId; 
  quantity: number; 
  totalPrice: number; 
};
export interface OrderModel extends Model<TOrder> {
  isOrderExists(id: string): Promise<TOrder | null>; 
}