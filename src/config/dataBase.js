import mongoose from "mongoose";

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME } = process.env;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`;

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
