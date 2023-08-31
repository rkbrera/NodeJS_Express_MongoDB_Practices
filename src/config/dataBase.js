import mongoose from "mongoose";

const uri =
  "mongodb+srv://rkbr2928:XlciUhFgeHqXcEYx@cluster0.jje6eal.mongodb.net/todo_list_app?retryWrites=true&w=majority";

export const DBConn = async () => {
  try {
    await mongoose.set("strictQuery", false).connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión con MongoDB Exitosa!! C: ");
  } catch (error) {
    console.log("Error al conectarse con MongoDB x_x ", error);
  }
};
