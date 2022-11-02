import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.js";

const app = express();

//const whiteList = ["httep: servidor en vercel"];

app.use(
  cors()
);

app.use(express.json());

// Aquí se muestra cuáles rutas estarán disponibles en el servidor
app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log("🍉🍉🍉 http://localhost:" + PORT));

console.log("Todo OK!");
