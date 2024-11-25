import { Model } from "mongoose";

export type TBike={
    id:string,
    name:string,
    brand:string,
    price:number,
    category:"Mountain"|"Road"|"Hybrid"|"Electric",
    description:string,
    quantity:number,
    isStock:boolean,
}
export interface BikeModel extends Model<TBike>{
    isBikeExists(id:string):Promise<TBike | null>;
}