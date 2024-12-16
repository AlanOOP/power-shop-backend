import express, { Express, Request, Response, urlencoded } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./config/db";

dotenv.config();
const app: Express = express();

connectDB();

app.use(cors());
app.use(express.json());


app.get('/', async (req: Request, res: Response) => {
    res.send('Hola Mundo')
})

export default app;