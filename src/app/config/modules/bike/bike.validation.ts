import { z } from "zod";

const bikeValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  brand: z.string().nonempty("Brand is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    errorMap: () => ({ message: "Invalid category" }),
  }),
  description: z.string().nonempty("Description is required"),
  quantity: z.number().min(0, "Quantity must be a positive number"),
  isStock: z.boolean(),
});
export default bikeValidationSchema ;