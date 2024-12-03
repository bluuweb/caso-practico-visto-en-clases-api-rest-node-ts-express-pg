import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const token = await authService.loginWithEmailAndPassword(email, password);

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const token = await authService.registerWithEmailAndPassword(
      email,
      password
    );
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  login,
  register,
};
