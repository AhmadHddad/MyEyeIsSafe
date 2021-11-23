import mongoose from "../data/mongoose";

export default async function dbConnect() {
  const connectionStr = 'mongodb://localhost:27017/test';

  try {
    await mongoose.connect(connectionStr);

    console.log("DB connected successfully!");
    
  } catch (error) {

    throw new Error("Could not connect to DB" + error?.message || error);
    
  }


}
