import express from "express";
import { getImageGenerator } from "../controllers/openAI.controllers.js";
const router = express.Router();
router.route("/generate").post(getImageGenerator);
export default router;
//# sourceMappingURL=openAI.routes.js.map