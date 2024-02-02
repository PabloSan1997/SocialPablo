import express from 'express';
import { usuarioRouter } from './usuarioRoutes';
import { imagenesRoutes } from './imagenesRoutes';

const indexRouter = express.Router();


export function createApi(app:express.Express){
    app.use('/api/v1', indexRouter);
    indexRouter.use('/user', usuarioRouter);
    indexRouter.use('/imagen', imagenesRoutes);
}