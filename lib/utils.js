import mongoose from 'mongoose'

const connection ={}

export const connectDB = async ()=>{
    try {
        if(connection.isConnected){
            console.log(`Using existing connection`)
            return ;
        }
          const db =  await mongoose.connect(process.env.MONGO)   
            connection.isConnected = mongoose.connections[0].readyState
            console.log(`Connected to Mongodb Database`)
    } catch (error) {
        console.log(error)
        throw new Error("error connecting to Mongodb Database", error)
    }
}