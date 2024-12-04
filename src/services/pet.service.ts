import { PetModel } from "../models/pet.model";

const createPet = async (uid: string, name: string, age: number) => {
  const newPet = await PetModel.create(uid, name, age);
  console.log({ newPet });
  return newPet;
};

export const petService = {
  createPet,
};
