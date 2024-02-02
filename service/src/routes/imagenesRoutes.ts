import express from 'express';
import { ImagenController } from '../controllers/ImagenController';

const controller = new ImagenController();
export const imagenesRoutes = express.Router();


imagenesRoutes.get('/', controller.leerImagenes);
imagenesRoutes.get('/:id_imagen', controller.leerUnaImagen);
imagenesRoutes.post('/nuevaImagen', controller.agregarImagen);
