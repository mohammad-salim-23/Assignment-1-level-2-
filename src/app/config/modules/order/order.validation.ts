import { z } from "zod";

// Zod validation for the `TOrder` schema
export const orderValidationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  product: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), // Ensures it's a valid MongoDB ObjectId
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"),
  totalPrice: z
    .number()
    .min(0, "Total price must be a positive number"),
});