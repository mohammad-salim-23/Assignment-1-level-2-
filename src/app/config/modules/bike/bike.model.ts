import { model, Schema } from 'mongoose';
import { BikeModel, TBike } from './bike.interface';


const bikeSchema = new Schema<TBike>({
    id: {
        type: String,
        required: [true, 'Student ID is required'],
        unique: true,
    },   
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ["Mountain", "Road", "Hybrid", "Electric"], 
    required: true 
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  isStock: { type: Boolean, required: true },
},
  {timestamps:true}
);

export const Bike = model<TBike,BikeModel>('Bike',bikeSchema);
