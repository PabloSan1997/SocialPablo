import { Imagen } from "../dbConfig/Models/Imagen";
import { Usuario } from "../dbConfig/Models/Usuario";
import { AppDataSource } from "../dbConfig/config";
import Boom from '@hapi/boom';
import { mostrarUsuarioUno } from "../utilities/formatoRespuesta";
import { UsuarioService } from "./UsuarioService";
import { Comentario } from "../dbConfig/Models/Comentario";

const reImagen = AppDataSource.getRepository(Imagen);
const reUsuario = AppDataSource.getRepository(Usuario);
const userService = new UsuarioService();
const reComentario = AppDataSource.getRepository(Comentario);

export class ImagenesService {
    async leerImagene(id_imagen: string | null = null) {
        if (id_imagen) {
            const imagenes = await reImagen.findOne({
                where: { id_imagen },
                relations: {
                    usuario: true
                }
            });
            
            if (!imagenes) throw Boom.notFound('No se encontró infromacion');

            const comentarios = await reComentario.find({
                where: { imagenes: imagenes },
                relations: { usuario: true }
            });
            const comentariosMostrar = comentarios.map(c => {
                return {
                    ...c,
                    usuario: mostrarUsuarioUno(c.usuario)
                }
            });
            const imagen = {
                ...imagenes,
                usuario: mostrarUsuarioUno(imagenes.usuario),
                comentarios: comentariosMostrar
            }
            return imagen;
        }
        const imagenes = await reImagen.find({
            relations: {
                usuario: true
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
        const dataUsar = await userService.infoToken(token);
        const usuario = await reUsuario.findOneBy({ id_user: dataUsar.id_user });
        const imagennueva = reImagen.create(imagen);
        if (!usuario) throw Boom.badRequest('Tienes permiso para esta accion');
        imagennueva.usuario = usuario;
        await reImagen.save(imagennueva);
        return imagennueva;
    }
    async deleteImage(token: string, id_imagen: string) {
        const userData = await userService.infoToken(token);
        const imagen = await reImagen.findOne({ where: { id_imagen }, relations: { usuario: true } });
        if (!imagen) throw Boom.notFound('No se encontro imagen');
        if (userData.id_user !== imagen.usuario.id_user) throw Boom.badRequest('No tienes permiso para esta accion');
        reImagen.delete({ id_imagen });
    }
    async addComent(token: string, id_imagen: string, comentario: AddComentario) {
        const info = await userService.infoToken(token);
        const usuario = await reUsuario.findOne({
            where: {
                id_user: info.id_user
            }
        });
        if (!usuario) throw Boom.badRequest('No tienes permiso para esta accion');
        const imagen = await reImagen.findOne({ where: { id_imagen } });
        if (!imagen) throw Boom.badRequest('No tienes permiso para esta acion');
        const crearComentario = reComentario.create(comentario);
        crearComentario.imagenes = imagen;
        crearComentario.usuario = usuario;
        await reComentario.save(crearComentario);
        const mostrar = {
            ...crearComentario,
            usuario: mostrarUsuarioUno(crearComentario.usuario)
        }
        return mostrar;
    }
    async deleteComment(token: string, id_comentario: string) {
        const info = await userService.infoToken(token);
        const comentario = await reComentario.findOne({ where: { id_comentario }, relations: { usuario: true } });
        if (!comentario) throw Boom.notFound('No se encontro comentario');
        if (comentario.usuario.id_user !== info.id_user) throw Boom.badRequest('No tienes permiso para esta accion');
        reComentario.delete({ id_comentario });
    }
}