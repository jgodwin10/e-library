import { Router } from "express";
import { login, register } from "../controller/UserController.js";



const router = Router();

router.post("/api/register", register);
router.post("/api/login", login);


export default router;