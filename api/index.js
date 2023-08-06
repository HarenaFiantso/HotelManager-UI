/* Initialisation des imports et lancement du serveur backend avec Express */
import express from "express";
import cors from "cors";
import { connect } from "./databaseConnection.js";

/* Importation des modules de gestion des routes */
import hotelRouter from "./app/routes/hotelRoute.js";
import authRouter from "./app/routes/authRoute.js";

const app = express();
app.listen(process.env.expressPORT || 3000, () => {
  connect();
  console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});

/* Middlewares, Routers */
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World, this the DreamHotel App");
});
app.use("/hotels", hotelRouter);
app.use("/auth", authRouter)
