import mongoose from "mongoose"

let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        console.log("using existing db")
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState;
        console.log('Database connected');
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase