import { rutas } from "../Routes";
import { useNavigate } from 'react-router-dom';
import { PerfilImagen } from "./perfilImagen";

export function ImagenGenerica({ url_image, image_description, usuario, comentario, createdAt, id_imagen }: ImagenGenericaInterface) {
    const { nickname, username, url_perfil } = usuario;
    const navegar = useNavigate();
    const ir = () => {
        navegar(`${rutas.imageUse}${id_imagen}`);
    }
    return (
        <div className="flex flex-col mb-10">
            <PerfilImagen url_perfil={url_perfil} nickname={nickname} username={username} createdAt={createdAt} />
            <p className="text-white text-[1rem] my-2">{image_description}</p>
            <div className="flex flex-col w-full m-auto bg-miGris-900 py-3 rounded-lg">
                <img onClick={ir} src={url_image} alt={nickname} className="max-w-[40%] m-auto" />
                <span className="text-white ml-5">Comentarios: {comentario}</span>
            </div>
        </div>
    )
}