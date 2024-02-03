import { Usuario } from "../dbConfig/Models/Usuario";
import { UsuarioInfo } from "../dbConfig/Models/UsuarioInfo";
import { AppDataSource } from "../dbConfig/config";
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import { mostrarUsuarioUno } from "../utilities/formatoRespuesta";
import { envVariables } from "../utilities/envVariables";
import jwt from 'jsonwebtoken';

const reUsuario = AppDataSource.getRepository(Usuario);
const reUsuarioInfo = AppDataSource.getRepository(UsuarioInfo);

export class UsuarioService {
    async readUser(id_user: string) {
        const oneUser = await reUsuario.findOne({
            where: { id_user },
            relations: {
                usuarioInfo: true,
                imagenes:true
            }
        });
        if (!oneUser) throw Boom.notFound('No se encontro usuario');

        return mostrarUsuarioUno(oneUser);
    }
    async readUserToken(token: string) {
        const loginResponse = await this.infoToken(token);
        const respuesta = await reUsuario.findOne({
            where: {
                id_user: loginResponse.id_user
            },
            relations: {
                usuarioInfo: true,
                imagenes: true
            }
        });
        if (!respuesta) throw Boom.notFound('No se encontro usuario');
        return mostrarUsuarioUno(respuesta);
    }
    async addUser(newUser: UsuarioDTO) {
        const password = bcrypt.hash(newUser.password, 8);
        const nuevo = reUsuario.create(newUser);
        nuevo.password = await password;
        await reUsuario.save(nuevo);
        return mostrarUsuarioUno(nuevo);
    }
    async addInfoUser(id_user: string, newInfo: UsuarioInfoDto) {
        const usuario = await reUsuario.findOne({ where: { id_user }, relations:{usuarioInfo:true} });
        if (!usuario) throw Boom.notFound('No se encontro usuario');
        if(usuario.usuarioInfo) throw Boom.badRequest('Ya existe informacion');
        const nuevoInfo = reUsuarioInfo.create(newInfo);
        await reUsuarioInfo.save(nuevoInfo);
        usuario.usuarioInfo = nuevoInfo;
        await reUsuario.update({ id_user }, usuario);
        return mostrarUsuarioUno(usuario);
    }
    async editInfoUser(token: string, data: UsuarioInfoDto) {
        const loginResponse = await this.infoToken(token);
        const datos = await reUsuario.findOne({
            where: {
                id_user: loginResponse.id_user,
                username: loginResponse.username
            },
            relations: { usuarioInfo: true }
        });
        if (!datos) throw Boom.badRequest('No tienes permiso');
        const info = datos.usuarioInfo;
        info.descripcion = data.descripcion;
        info.url_perfil = data.url_perfil;
        await reUsuarioInfo.save(info);
        return info;

    }
    async loginUser(loginBody: LoginInterface): Promise<LoginRespose> {
        const usuario = await reUsuario.findOne({ where: { username: loginBody.username } });
        if (!usuario) throw Boom.badRequest('No se encontro usuario');
        const checar = await bcrypt.compare(loginBody.password, usuario.password);
        if (!checar) throw Boom.badRequest('Contraseña incorrecta');
        usuario.password = await bcrypt.hash(loginBody.password, 5);
        const respuesta: TokenResponse = {
            id_user: usuario.id_user,
            username: usuario.username
        }
        await reUsuario.save(usuario);
        const token = jwt.sign(respuesta, envVariables.key_jwt!);
        return { token };
    }
    async infoToken(token: string) {
        const datos = jwt.verify(token, envVariables.key_jwt!) as TokenResponse;
        return datos;
    }
}