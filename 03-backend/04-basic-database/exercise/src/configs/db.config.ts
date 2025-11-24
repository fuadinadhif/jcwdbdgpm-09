import { Pool } from "pg";

const pool = new Pool({
  user: "postgres.cxmgydhblbfixlgbwvkf",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  database: "postgres",
  password: "newpass",
  port: 5432,
});

export default pool;
