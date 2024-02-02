import { Imagen } from "../dbConfig/Models/Imagen";
import { Usuario } from "../dbConfig/Models/Usuario";
import { AppDataSource } from "../dbConfig/config";
import Boom from '@hapi/boom';
import { mostrarUsuarioUno } from "../utilities/formatoRespuesta";
import { UsuarioService } from "./UsuarioService";

const reImagen = AppDataSource.getRepository(Imagen);
const reUsuario = AppDataSource.getRepository(Usuario);
const userService = new UsuarioService();

export class ImagenesService {
    async leerImagene(id_imagen: string | null = null) {
        if (id_imagen) {
            const imagenes = await reImagen.findOne({
                where: { id_imagen },
                relations: {
                    usuario: true,
                    comentario: true
                }
            });
            if (!imagenes) throw Boom.notFound('No se encontró infromacion');
            const imagen = {
                ...imagenes,
                usuario: mostrarUsuarioUno(imagenes.usuario)
            }
            return imagen;
        }
        const imagenes = await reImagen.find({
            relations: {
                usuario: true,
                comentario: true
            }
        });
        const mostrar = imagenes.map(i => {
            return {
                ...i,
                usuario: mostrarUsuarioUno(i.usuario)
            }
        });
        return mostrar;
    }
    async addImage(token: string, imagen: AddImagen) {
        console.log(token);
        const dataUsar = await userService.infoToken(token);
        const usuario = await reUsuario.findOneBy({ id_user: dataUsar.id_user });
        const imagennueva = reImagen.create(imagen);
        if (!usuario) throw Boom.badRequest('Tienes permiso para esta accion');
        imagennueva.usuario = usuario;
        await reImagen.save(imagennueva);
        return imagennueva;
    }
}