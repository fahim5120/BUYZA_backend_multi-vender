const { default: mongoose } = require("mongoose")
const  {initializeAdminUser} = require("../service/DataInitializeService")

const url="mongodb+srv://muhdfahim786_db_user:lRE5jAik7m0HJryk@cluster0.qvtzcbv.mongodb.net/?appName=Cluster0"

const connectDB=async (params)=> {
    try {
        const conn=await mongoose.connect(url)
        initializeAdminUser()
        console.log(`mongoDDb connected :${conn.connection.host}`)
        console.log("connected DB");
        
    } catch (error) {
        console.log(`mongoDb Error:${error}`)
    }
}

module.exports=connectDB