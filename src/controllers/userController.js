import User from "../models/user";

export const getUsers = async (_, response) => {
  try {
    const users = await User.find({});
    response.status(200).send(users);
    
  } catch (error) {
    response.status(422).send({ error: error.message });
  }
};

export const createUser = async (request, response) => {
  try {
    const { username, name, lastname, email } = request.body;

    const newUser = new User({
      username,
      name,
      lastname,
      email,
    });

    await newUser.save();

    response.status(201).send(newUser);
  } catch (error) {
    response.status(422).send({ error: error.message });
  }
};

export const getUserById = async (request, response) => {
  const { id } = request.params;
  const userId = await User.findById(id);
  if (!userId) {
    response.status(404).send("No existe el registro en la base de datos");
  } else {
    response.status(200).send(userId);
  }
};

export const updateUserById = async (request, response) => {
  // obtener datos
  const { id } = request.params;
  const { username, name, lastname, email } = request.body;

  // buscar registro
  const findUser = await User.findOneAndUpdate(
    { _id: id },
    { username, name, lastname, email },
    { returnOriginal: false });

  // respondo al cliente
  response.send({ message: "Se actualizo el usuario", data: findUser });
};

export const deleteUserById = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      response
        .status(404)
        .send({ message: "Ya no existe el usuario en la base de datos" });
    }

    response
      .status(200)
      .send({ message: "Se elimino el usuario correctamente" });
  } catch (error) {
    console.log(error.message);
    response.status(422).send({ error: error.message });
  }
};