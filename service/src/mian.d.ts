

interface UsuarioInterface {
    id_user: number;
    username: string;
    nickname: string;
    password: string;
}

interface UsuarioInfoInterface {
    id_user_info: number;
    descripcion: string;
    url_perfil: string;
}


interface UsuarioRelationInfo extends UsuarioInterface{
    usuarioInfo:UsuarioInfoInterface
}

interface UsuarioRelationImagenes extends UsuarioRelationInfo{
    imagenes:ImagenInterface[]
}



interface ImagenInterface {
    id_imagen: number
    image_description: string;
    url_image: string;
}

interface ImagenRelationUser extends ImagenInterface{
    usuario:UsuarioInfoInterface
}

