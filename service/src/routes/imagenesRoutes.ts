import express from 'express';
import { ImagenController } from '../controllers/ImagenController';

const controller = new ImagenController();
export const imagenesRoutes = express.Router();


imagenesRoutes.get('/', controller.leerImagenes);
imagenesRoutes.get('/:id_imagen', controller.leerUnaImagen);
imagenesRoutes.post('/nuevaImagen', controller.agregarImagen);
imagenesRoutes.post('/comentario/:id_imagen', controller.addComentario);
imagenesRoutes.delete('/:id_imagen', controller.deleteImagen);
imagenesRoutes.delete('/comentario/:id_comentario', controller.deleteComentario);