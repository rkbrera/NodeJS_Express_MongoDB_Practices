import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la tarea es requerido"],
    },
    complete: Boolean,
  }, // Me asegura de que siempre debe traer ese atributo => required true
  { timestamps: true } /*Para llevar control de registros*/
);

const Task = model("tasks", taskSchema); // Tiene ciertos métodos que monngose inserta y cuando lo invoquemos podamos interactuar con la DB. Creamos una colección llamada task que usará los atributos (estructura) de taskScheme

export default Task;
