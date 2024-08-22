const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const songRoutes = require('./routes/songRoutes');
const cors = require('cors');
const cookieParser =require('cookie-parser');
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend application
  credentials: true, // Allow credentials (cookies) to be sent in CORS requests
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api", songRoutes);
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode|| 500;
  const message= err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Port is listening http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
