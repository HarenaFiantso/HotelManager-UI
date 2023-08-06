/* Initialisation des imports et lancement du serveur backend avec Express */
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connect } from "./databaseConnection.js";

/* Importation des modules de gestion des routes */
import hotelRouter from "./app/routes/hotelRoute.js";
import authRouter from "./app/routes/authRoute.js";
import roomRouter from "./app/routes/roomRoute.js";
import userRouter from "./app/routes/userRoute.js";

const app = express();
app.listen(process.env.expressPORT || 3000, () => {
  connect();
  console.log(`Server listen on port ${process.env.expressPORT || 3000}`);
});

/* Middlewares, Routers */
app.use(express.json());
app.use(cors());

app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
