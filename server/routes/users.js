import express from "express";
import { deleteUser, getUser, update } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Get User
router.get("/find/:id", getUser);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

export default router;
