import express, { Router } from "express";
import { getImageGenerator } from "../controllers/openAI.controllers.js";

const router: Router = express.Router();

router.route("/generate").post(getImageGenerator)

export default router;