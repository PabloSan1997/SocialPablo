import express from 'express';
import { usuarioRouter } from './usuarioRoutes';

const indexRouter = express.Router();


export function createApi(app:express.Express){
    app.use('/api/v1', indexRouter);
    indexRouter.use('/user', usuarioRouter);
}