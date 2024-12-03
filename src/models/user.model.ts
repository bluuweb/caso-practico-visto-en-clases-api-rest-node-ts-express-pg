import { pool } from "../config/database";

const getByEmail = async (email: string) => {
  // Datos parametrizados
  const query = {
    text: `
    SELECT * FROM USERS
    WHERE email = $1
    `,
    values: [email],
  };

  const { rows } = await pool.query(query);

  console.log(rows);
  return rows[0];
};

const create = async (email: string, password: string) => {
  const query = {
    text: `
    INSERT INTO USERS (email, password)
    VALUES ($1, $2)
    RETURNING *
    `,
    values: [email, password],
  };

  const { rows } = await pool.query(query);

  console.log(rows);
  return rows[0];
};

export const UserModel = {
  create,
  getByEmail,
};
