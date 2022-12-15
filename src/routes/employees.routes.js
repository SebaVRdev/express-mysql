//Configuracion de las rutas
import { Router } from "express";
import { getEmployees, saveEmploye, updateEmploye, deleteEmploye, getEmploye } from '../controller/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmploye);
router.post('/employees', saveEmploye);
router.patch('/employees/:id', updateEmploye);
//router.put('/employees/:id', updateEmploye); /* put cuando se reciben todos los parametros */
router.delete('/employees/:id', deleteEmploye);


export default router;