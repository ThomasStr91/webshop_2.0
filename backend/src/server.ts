import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"
import { AppDataSource } from "./config/database";
import userRoutes from "./routes/userRoute";
import { log } from "console";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}))

app.use(cors()); 
app.use(express.json());
app.use('/users', userRoutes)

app.listen(3000, () => console.log("Server läuft auf Port 3000"))
app.listen(port, () => {console.log(`Server läuft auf http://localhost:${port}`);
})

