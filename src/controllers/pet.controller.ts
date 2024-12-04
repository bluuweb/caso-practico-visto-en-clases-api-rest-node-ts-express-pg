import { NextFunction, Request, Response } from "express";
import { petService } from "../services/pet.service";
import { HttpError } from "../utils/httpError.util";

const createPet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, age } = req.body;
    const { uid } = req;

    if (!uid) throw new HttpError("No token", 401);

    const newPet = await petService.createPet(uid, name, age);
    res.status(201).json({ newPet });
  } catch (error) {
    next(error);
  }
};

export const petController = { createPet };
