import { Router } from "express";
import { list, create, remove, update } from "../controllers/card.js";

const cardRoutes = Router();



cardRoutes.get("/",list)
cardRoutes.post("/",create)
cardRoutes.delete("/:id",remove)
cardRoutes.put("/:id",update)




export default cardRoutes