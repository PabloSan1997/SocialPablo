import { UsuarioService } from '../services/UsuarioService';
import { NextFunction, Request, Response } from 'express';

const servicioUsuario = new UsuarioService();

export class UsuarioController {
	async readOneUser(req: Request, res: Response, next: NextFunction) {
		try {
			const { username } = req.params as { username: string };
			const datos = await servicioUsuario.readUser(username);
			res.json(datos);
		} catch (error) {
			next(error);
		}
	}
	async readUserToken(req: Request, res: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers as { authorization: string };
			const usuario = await servicioUsuario.readUserToken(authorization);
			res.json(usuario);
		} catch (error) {
			next(error);
		}
	}
	async addUser(req: Request, res: Response, next: NextFunction) {
		try {
			const cuerpo: UsuarioDTO = req.body;
			const nuevoUsuario = await servicioUsuario.addUser(cuerpo);
			res.status(201).json(nuevoUsuario);
		} catch (error) {
			next(error);
		}
	}
	async addUserInfo(req: Request, res: Response, next: NextFunction) {
		try {
			const cuerpo: UsuarioInfoDto = req.body;
			const { id_user } = req.params as { id_user: string };
			const nuevoElemento = await servicioUsuario.addInfoUser(id_user, cuerpo);
			res.status(201).json(nuevoElemento);
		} catch (error) {
			next(error);
		}
	}
	async editInfoUser(req: Request, res: Response, next: NextFunction) {
		try {
			const cuerpo: UsuarioInfoDto = req.body;
			const { authorization } = req.headers as { authorization: string };
			const elemento = await servicioUsuario.editInfoUser(authorization, cuerpo);
			res.json(elemento);
		} catch (error) {
			next(error);
		}
	}
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const datos: LoginInterface = req.body;
			const respuesta = await servicioUsuario.loginUser(datos);
			res.json(respuesta);
		} catch (error) {
			next(error);
		}
	}
}