import { Request, Response } from "express";
import { userService } from "../services/user.service";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      email: req.email,
      users,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else res.status(500).json({ error: "Error de servidor" });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else res.status(500).json({ error: "Error de servidor" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const newUser = await userService.createUserWithEmailAndPassword(
      email,
      password
    );
    res.json({ newUser });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else res.status(500).json({ error: "Error de servidor" });
  }
};

export const userController = {
  getUsers,
  getUser,
  createUser,
};
