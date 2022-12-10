import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"

import openAIRouter from "./routes/openAI.routes.js"

dotenv.config();
const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use("/api/openai", openAIRouter)

const port = process.env.PORT;


// Listen Port
app.listen(port, () => console.log(`Server is running on port ${port}`))