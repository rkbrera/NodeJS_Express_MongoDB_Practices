import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de Usuario es requerido"],
    },
    name: {
      type: String,
      required: [true, "Escriba el nombre de pila del Usuario"],
    },
    lastname: {
      type: String,
      required: [true, "Escriba el apellido del usuario"],
    },
    email: {
      type: String,
      required: [true, "Ingrese un correo electrónico"],
    },
  },
  { timestamps: true }
);

const user = model("users", userSchema);

export default user;
