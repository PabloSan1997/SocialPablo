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
}