import { ImagenesService } from "../services/ImagenesService";
import { NextFunction, Request, Response } from 'express';

const servicio = new ImagenesService();

export class ImagenController {
    async leerImagenes(_req: Request, res: Response, next: NextFunction) {
        try {
            const imagenes = await servicio.leerImagene();
            res.json(imagenes);
        } catch (error) {
            next(error);
        }
    }
    async leerUnaImagen(req: Request, res: Response, next: NextFunction) {
        try {
            const { id_imagen } = req.params;
            const imagen = await servicio.leerImagene(id_imagen);
            res.json(imagen);
        } catch (error) {
            next(error);
        }
    }
    async agregarImagen(req: Request, res: Response, next: NextFunction) {
        try {
            const { authorization } = req.headers as { authorization: string };
            const imagen = await servicio.addImage(authorization, req.body);
            res.status(201).json(imagen);
        } catch (error) {
            next(error);
        }
    }
    async deleteImagen(req: Request, res: Response, next: NextFunction) {
        try {
            const { authorization } = req.headers as { authorization: string };
            const { id_imagen } = req.params;
            await servicio.deleteImage(authorization, id_imagen);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }
    async addComentario(req: Request, res: Response, next: NextFunction) {
        try {
            const { authorization } = req.headers as { authorization: string };
            const { id_imagen } = req.params;
            const comentario = await servicio.addComent(authorization, id_imagen, req.body);
            res.status(201).json(comentario);
        } catch (error) {
            next(error);
        }
    }
    async deleteComentario(req: Request, res: Response, next: NextFunction){
        try {
            const { authorization } = req.headers as { authorization: string };
            const { id_comentario } = req.params;
            await servicio.deleteComment(authorization, id_comentario);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }
}