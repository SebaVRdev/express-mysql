import { Router } from "express";
import { ping } from "../controller/index.controller.js";


const router = Router();

//Probar BD
router.get('/ping', ping)

export default router