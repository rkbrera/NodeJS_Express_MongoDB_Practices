import express from "express";
import { jsonParser } from "./src/middleware/bodyParser";
import tasksRouter from "./src/routers/tasksRouter";
import usersRouter from "./src/routers/usersRouter";
import { DBConn } from "./src/config/dataBase";

const app = express();
const port = 3001;

DBConn();

app.use(jsonParser);

app.use(tasksRouter);
app.use(usersRouter)

app.listen(port, () => {
  console.log(`Aplicacion escuchando por el puerto ${port}`);
});
