import user from "../models/user.js"

export const newUser = async (request, response) => {

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