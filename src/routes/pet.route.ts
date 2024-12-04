import { Router } from "express";
import { petController } from "../controllers/pet.controller";
import { verifyToken } from "../middlewares/jwt.middleware";

const router = Router();

router.use(verifyToken);

router.post("/", petController.createPet);

export default router;
