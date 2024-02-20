/// <reference types="vite/client" />

type Children = {
    children: JSX.Element | JSX.Element[]
}

interface LoginInterface {
    username: string;
    password: string;
}

interface BoomError {
    statusCode: number,
    error: string,
    message: string
}

interface LoginRespose {
    token: string;
    nickname: string;
}

interface InitialState {
    token: string,
    nickname: string,
    imagenes: ImagenGenericaInterface[],
    imagen: ImagenUna,
    perfil: Perfil,
    textoError: string
}

interface ImagenInterface {
    id_imagen: string,
    image_description: string,
    url_image: string,
    usuario: UsuarioGen;
    createdAt: string;
}

interface ImagenGenericaInterface extends ImagenInterface {
    comentario: number;
}

interface ImagenUna extends ImagenInterface {
    comentarios: ComentariosGen[]
}

interface ComentariosGen {
    id_comentario: string,
    comentario: string,
    usuario: UsuarioGen;
    createdAt: string;
}

interface UsuarioGen {
    id_user: string,
    username: string,
    nickname: string,
    url_perfil: string
}

interface UsuarioInfo {
    descripcion: string,
    id_user_info: string;
    createdAt: string;
    updateAt: string;
}

interface Perfil extends UsuarioGen {
    usuarioInfo: UsuarioInfo;
    createdAt: string;
    imagenes: {
        id_imagen: string,
        image_description: string,
        url_image: string,
        createdAt: string;
    }[];
}


interface PerfilImagenInfo {
    url_perfil: string,
    nickname: string,
    username: string,
    createdAt: string
}
