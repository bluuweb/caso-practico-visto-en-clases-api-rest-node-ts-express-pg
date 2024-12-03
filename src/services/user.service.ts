import bcrypt from "bcryptjs";

import { UserModel } from "../models/user.model";

const getAllUsers = async () => {
  // TODO:
};

const getUser = async () => {};

// const getUserByEmail = async(email: string) => {
//   const users = await getAllUsers();

// }

const createUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await UserModel.getByEmail(email);

  if (user) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  const newUser = await UserModel.create(email, passwordHashed);

  return newUser;
};

export const userService = {
  getAllUsers,
  getUser,
  createUserWithEmailAndPassword,
};
