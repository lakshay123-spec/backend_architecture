import mongoose from "mongoose";

const createConnection = async () => {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://lakshay:test123456@pizzaapp.je6glab.mongodb.net/pizzadb"
    );
    console.log("database connected");
  } catch (err) {
    console.log("db connection fails");
  }
};

export default createConnection
