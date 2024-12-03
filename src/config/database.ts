import pg from "pg";

const { Pool } = pg;

// docker 5434
// pgadmin 5432
const connectionString = "postgresql://postgres:root@localhost:5434/dbpets";

export const pool = new Pool({
  connectionString,
  allowExitOnIdle: true,
});
