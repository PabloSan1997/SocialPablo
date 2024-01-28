import boom ,{Boom} from '@hapi/boom';
import {NextFunction, Request, Response} from 'express';

export function boomHandle(error:Boom, _req:Request, res:Response, _next:NextFunction){
    if(error.isBoom){
        const {payload} = error.output;
        res.status(payload.statusCode).json(payload);
    }else{
        const serverError = boom.badImplementation();
        const {payload} = serverError.output;
        res.status(payload.statusCode).json(payload);
    }
}