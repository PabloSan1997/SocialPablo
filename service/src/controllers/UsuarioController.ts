import { UsuarioService } from "../services/UsuarioService";
import {NextFunction, Request, Response} from 'express';

const servicioUsuario = new UsuarioService();

export class UsuarioController{
    async readOneUser(req:Request, res:Response, next:NextFunction){
        try {
            const {id_user} = req.params as {id_user:string};
            const datos = await servicioUsuario.readUser(Number(id_user));
            res.json(datos);
        } catch (error) {
            next(error);
        }
    }
    async addUser(req:Request, res:Response, next:NextFunction){
        try {
            const cuerpo:UsuarioDTO = req.body;
            const nuevoUsuario = await servicioUsuario.addUser(cuerpo);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            next(error);
        }
    }
    async addUserInfo(req:Request, res:Response, next:NextFunction){
        try {
            const cuerpo:UsuarioInfoDto = req.body;
            const {id_user} = req.params as {id_user:string}
            const nuevoElemento = await servicioUsuario.addInfoUser(Number(id_user), cuerpo);
            res.status(201).json(nuevoElemento);
        } catch (error) {
            next(error);
        }
    }
    async editInfoUser(req:Request, res:Response, next:NextFunction){
        try {
            const cuerpo:UsuarioInfoDto = req.body;
            const {id_user_info} = req.params as {id_user_info:string}
            const elemento = await servicioUsuario.editInfoUser(Number(id_user_info), cuerpo);
            res.json(elemento);
        } catch (error) {
            next(error);
        }
    }
}