import user from "../models/user.js"

export const getUsers = async (_, response) => {
  const users = await user.find({})
  response.send(users)
}

export const createUser = async (request, response) => {
    try {
      const { username, name, lastname, email  } = request.body;
  
      const newUser = new user({
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
    const userId = await user.findById(id);
    if (!userId) {
      response.status(404).send("No existe el registro en la base de datos");
      
    } else {
      response.status(200).send(userId);
    }
   
  }    