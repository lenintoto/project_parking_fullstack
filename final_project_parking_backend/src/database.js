import mongoose from "mongoose"


mongoose.set("strictQuery", true)

const conexion = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI_PRODUCTION)
        console.log(`Database connected in ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log("No se ha podido conectar con la base de datos")
    }
} 



export default conexion