
// ------Usuario
interface UsuarioInterface {
    id_user: string;
    username: string;
    nickname: string;
    password: string;
    url_perfil: string;
}

interface UsuarioDTO {
    username: string;
    nickname: string;
    password: string;
    url_perfil: string;
}

interface LoginInterface {
    username: string;
    password: string;
}

interface LoginRespose {
    token: string;
    nickname:string;
}

interface TokenResponse {
    id_user: string;
    username: string;
}

interface UsuarioInfoDto {
    descripcion: string;
    url_perfil: string;
}

interface UsuarioInfoInterface {
    id_user_info: string;
    descripcion: string;
}


interface UsuarioRelationInfo extends UsuarioInterface {
    usuarioInfo: UsuarioInfoInterface
}

interface UsuarioRelationImagenes extends UsuarioRelationInfo {
    imagenes: ImagenInterface[]
}


//------------Imagen------

interface AddImagen {
    image_description: string;
    url_image: string;
}

interface ImagenInterface {
    id_imagen: string;
    image_description: string;
    url_image: string;
}

interface ImagenRelationUser extends ImagenInterface {
    usuario: UsuarioInfoInterface
}

interface AddComentario {
    comentario: string;
}
interface ComentarioInterface {
    id_comentario: string;
    comentario: string;
}