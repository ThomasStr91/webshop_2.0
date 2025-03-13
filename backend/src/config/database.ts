import { DataSource } from "typeorm";
import dotenv from "dotenv"

dotenv.config();

export const AppDataSource = new DataSource({
  type:"postgres",
  host: process.env.DB_Host,
  port: Number(process.env.DB_Host),
  username:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DB_NAME,
  entities:["src/models/*ts"],
  synchronize:true,
})