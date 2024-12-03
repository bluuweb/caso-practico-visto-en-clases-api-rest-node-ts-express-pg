import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userService } from "./user.service";

const loginWithEmailAndPassword = async (email: string, password: string) => {
  const users = await userService.getAllUsers();

  // 1. verificar que existe el usuario
  const user = users.find((item) => item.email === email);
  if (!user) {
    throw new Error("User not found");
  }

  // 2. comparar los hash de contraseña
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Password incorrect");
  }

  // 3. generar el token
  const token = jwt.sign({ email: user.email }, "secret", {
    expiresIn: "1h",
  });

  return token;
};

export const authService = {
  loginWithEmailAndPassword,
};
