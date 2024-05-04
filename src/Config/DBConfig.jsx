import mongoose from "mongoose"

async function DBConfig() {
  try {
    mongoose.connect(process.env.MONGO_URI)
    const conn = mongoose.connection
    conn.on("connection", ()=>{
        console.log("MongoDB Connected!")
    })
    conn.on("error", (err)=>{
        console.log(`MongoDB Connection Error: ${err}\nMake Sure MongoDB Service is Running!`)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
}

export default DBConfig