# Mongoose Use Backend

Mongoose Use Backend is a robust backend application built using Node.js, Express.js, and MongoDB, featuring APIs for managing bikes and orders. The application is designed for seamless data handling with features like real-time inventory updates, order creation, and revenue tracking.

## 🚀 Live Demo

Check out the live application: [Mongoose Use Backend](https://mongoose-use-backend.vercel.app)

---

## 📋 Features

### Bikes Module:
- **Add New Bike**: Create new bike records in the database.
- **Update Inventory**: Update bike inventory and stock availability.
- **Retrieve Bikes**: Get all bikes or a specific bike by its ID.
- **Delete Bikes**: Remove bike records from the database.

### Orders Module:
- **Create Order**: Place orders for bikes with real-time inventory adjustments.
- **Fetch All Orders**: Retrieve a list of all orders with detailed information.
- **Revenue Tracking**: Calculate total revenue using MongoDB's aggregation pipeline.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Validation**: Zod Schema Validation
- **Deployment**: Vercel

---

## 🖥️ Local Setup Instructions

Follow these steps to set up the project locally on your machine:

### Prerequisites:
1. Node.js (v14+)
2. MongoDB (local or cloud instance)
3. Git installed on your machine

### Steps:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mohammad-salim-23/Assignment-1-level-2-
   cd mongoose-use-backend
2.**Install Dependencies**:
   npm install
3.**Set Environment Variables:**
  PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
4.**Run the Application:**
  npm start

###API EndPoints
 **Bikes**
GET /api/bikes - Retrieve all bikes
GET /api/bikes/:id - Retrieve a specific bike by ID
POST /api/bikes - Add a new bike
PUT /api/bikes/:id - Update a bike's details
DELETE /api/bikes/:id - Delete a bike 
**Orders**
POST /api/orders - Create a new order
GET /api/orders - Get all orders
GET /api/orders/revenue - Calculate total revenue 


🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to:

Fork the project
Submit pull requests
Open issues for discussion 

📧 Contact
For any inquiries, reach out to:
Developer: Mohammad Salim
Email: mohammadsalim017427@gmail.com
GitHub: https://github.com/mohammad-salim-23