import express from "express";
const router = express.Router()
import User from '../models/User.js';
import { register } from '../controllers/users/userCreateController.js'; 
import {login} from '../controllers/users/userLoginController.js';
import {modify} from '../controllers/users/userModifyController.js';
import {authenticateUser} from '../../middleware_auth.js';
import {remove} from '../controllers/users/userDeleteController.js';
import {getUserById} from '../controllers/users/userGetByIdController.js';


// Registro
router.post('/register', register);

// Inicio de sesión
router.post('/login', login);

//INICIO DEL MIDDLEWARE
router.use(authenticateUser);

// Editar perfil
router.put('/edit-profile', modify);

// Eliminar cuenta
router.delete('/delete-account', remove);

// Obtener usuario por ID
router.get('/user/:id', getUserById);

  

export default router