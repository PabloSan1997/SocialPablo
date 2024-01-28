import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';


export const usuarioRouter = express.Router();
const controller = new UsuarioController();

usuarioRouter.get('/:id_user', controller.readOneUser);
usuarioRouter.post('/addNewUser', controller.addUser);
usuarioRouter.post('/addNewInfo/:id_user', controller.addUserInfo);
usuarioRouter.put('/:id_user_info', controller.editInfoUser);