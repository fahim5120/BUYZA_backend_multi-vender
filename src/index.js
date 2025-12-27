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
const productRoutes=require("./routers/ProductsRoutes");
const sellerProdutRoutes=require("./routers/sellerProductRoutes");
const cartRoutes=require("./routers/CartRoutes");
const orderRoutes=require("./routers/orderRoutes");
const sellerOrderRoutes=require("./routers/sellerOrderRoutes");

app.use("/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/sellers",sellerRoutes)
app.use("/products",productRoutes)
app.use("/api/sellers/products",sellerProdutRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/seller/orders",sellerOrderRoutes)
app.use("/admin",adminRoutes)












const port=5000
app.listen(port,async()=>{
    console.log(`server is running on port ${port}`);
    await connectDB()
})


//lRE5jAik7m0HJryk