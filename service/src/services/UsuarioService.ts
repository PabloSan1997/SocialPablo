import { Usuario } from "../dbConfig/Models/Usuario";
import { UsuarioInfo } from "../dbConfig/Models/UsuarioInfo";
import { AppDataSource } from "../dbConfig/config";
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';
import { mostrarUsuarioUno } from "../utilities/formatoRespuesta";

const reUsuario = AppDataSource.getRepository(Usuario);
const reUsuarioInfo = AppDataSource.getRepository(UsuarioInfo);

export class UsuarioService {
    async readUser(id_user: number) {
        const oneUser = await reUsuario.findOne({
            where: { id_user },
            relations: {
                usuarioInfo: true
            }
        });
        if (!oneUser) throw Boom.notFound('No se encontro usuario');

        return mostrarUsuarioUno(oneUser);
    }
    async addUser(newUser: UsuarioDTO) {
        const password = bcrypt.hash(newUser.password, 8);
        const nuevo = reUsuario.create(newUser);
        nuevo.password = await password;
        await reUsuario.save(nuevo);
        return mostrarUsuarioUno(nuevo);
    }
    async addInfoUser(id_user: number, newInfo: UsuarioInfoDto) {
        const usuario = await reUsuario.findOne({ where: { id_user } });
        if (!usuario) throw Boom.notFound('No se encontro usuario');

        const nuevoInfo = reUsuarioInfo.create(newInfo);
        await reUsuarioInfo.save(nuevoInfo);
        usuario.usuarioInfo = nuevoInfo;
        await reUsuario.update({ id_user }, usuario);
        return mostrarUsuarioUno(usuario);
    }
    async editInfoUser(id_user_info: number, data: UsuarioInfoDto) {
        const buscar = await reUsuarioInfo.findOne({
            where: { id_user_info }
        });
        if (!buscar) throw Boom.notFound('No se encontro usuario');
        buscar.url_perfil = data.url_perfil;
        buscar.descripcion = data.descripcion;
        await reUsuarioInfo.save(buscar);
        return buscar;
    }
}