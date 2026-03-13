const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://event_03:Event_03@cluster0.tio6nns.mongodb.net/eventDB?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/events",eventRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/payment",paymentRoutes);
app.listen(5000,()=>{
console.log("Server running on port 5000");
});