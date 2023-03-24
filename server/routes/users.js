import express from "express";
import { getUser, update } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Get User
router.get("/find/:id", getUser);

export default router;
