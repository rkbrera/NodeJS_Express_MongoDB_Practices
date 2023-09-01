// Controlador de Tareas

import Task from "../models/task";

export const getTask = async (_, response) => {
  try {
    const tasks = await Task.find({});
    response.status(200).send(tasks);
  } catch (error) {
    response.status(422).send({ error: error.message });
  }
};

export const newTask = async (request, response) => {
  // obtener la informacion que envia el cliente
  // el cliente nos envia atraves de una peticion post la informacion
  // utilizando el objecto body
  try {
    const { name, complete } = request.body;

    const newTask = new Task({
      name,
      complete,
    });

    await newTask.save();

    response.status(201).send(newTask);
  } catch (error) {
    response.status(422).send({ error: error.message });
  }
};

export const getTodoList = (request, response) => {
  const { taskId } = request.params;
  const task = todoLists.find((task) => task.id == taskId);
  if (!task) {
    response.status(404).send("no existe el registro en la base de datos");
  }
  response.status(200).send(task);
};

export const updateTask = (request, response) => {
  // obtener datos
  const { taskId } = request.params;
  const { task, complete } = request.body;

  // buscar registro
  let getTask = todoLists.find((task) => task.id == taskId);

  // actualizo registro, spread operator
  let updateTask = {
    ...getTask,
    task,
    complete,
  };

  // guardo en base de datos
  getTask.complete = complete;
  getTask.task = task;

  // respondo al cliente
  response.send({ message: "Se actualizo la tarea", data: updateTask });
};

export const deleteTask = (request, response) => {
  const { taskId } = request.params;
  const task = todoLists.find((task) => task.id == taskId);

  if (!task) {
    response.status(404).send("no existe el registro en la base de datos");
  }

  // simulando eliminacion de base de datos
  todoLists = todoLists.filter((tlTask) => tlTask.id != task.id);
  response.status(200).send(todoLists);
};
