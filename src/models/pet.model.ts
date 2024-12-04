import { pool } from "../config/database";

const create = async (uid: string, name: string, age: number) => {
  const query = {
    text: `
    INSERT INTO PETS (name, age, user_id)
    VALUES ($1,$2,$3)
    RETURNING *
    `,
    values: [name, age, uid],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

export const PetModel = {
  create,
};
