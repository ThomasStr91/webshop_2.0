import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"
import loginRoutes from "./routes/loginRoutes"


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}))

app.use(express.json())


app.use(cors()); 
app.use(express.json());
app.use('/login', loginRoutes)

app.listen(port, () => {console.log(`Server läuft auf http://localhost:${port}`);
})

