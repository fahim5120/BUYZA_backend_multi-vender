require("dotenv").config();
const express = require('express');

const connectDB = require('./db/db');
const bodyParser = require('body-parser');
const app=express()



app.get("/",(req,res)=>{
    res.send({message:"Hello Welcome To Buyza Backend System!"})
})
app.use(bodyParser.json())
const adminRoutes=require("./routers/AdminRoutes")
const sellerRoutes=require("./routers/SellerRoutes");
const authRoutes=require("./routers/AuthRoutes");
const userRoutes=require("./routers/UserRoutes");

app.use("/sellers",sellerRoutes)
app.use("/admin",adminRoutes)
app.use("/auth",authRoutes)
app.use("/api/users",userRoutes)










const port=5000
app.listen(port,async()=>{
    console.log(`server is running on port ${port}`);
    await connectDB()
})


//lRE5jAik7m0HJryk