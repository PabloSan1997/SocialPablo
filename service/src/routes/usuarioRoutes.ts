import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController';


export const usuarioRouter = express.Router();
const controller = new UsuarioController();

usuarioRouter.get('/', controller.readUserToken);
usuarioRouter.get('/:username', controller.readOneUser);
usuarioRouter.post('/addNewUser', controller.addUser);
usuarioRouter.post('/addNewInfo/:id_user', controller.addUserInfo);
usuarioRouter.put('/', controller.editInfoUser);
usuarioRouter.post('/login', controller.login);