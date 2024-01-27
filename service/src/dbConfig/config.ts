import {DataSource} from 'typeorm';
import { envVariables } from '../utilities/envVariables';
import { Usuario } from './Models/Usuario';
import { UsuarioInfo } from './Models/UsuarioInfo';
import { Imagen } from './Models/Imagen';


export const AppDataSource = new DataSource({
    type:'postgres',
    url:envVariables.url_database,
    synchronize: true,
    logging: true,
    entities:[Usuario, UsuarioInfo, Imagen]
});