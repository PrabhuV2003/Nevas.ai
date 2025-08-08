import express from "express";
import { submitNewsletterFrom } from "../controllers/subscribeController.js";

const router = express.Router();

// router.post('/',)

router.post('/', submitNewsletterFrom)

export default router;