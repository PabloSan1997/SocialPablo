import { convertirFechaHora } from "../utilities/convertirFecha";

export function PerfilImagen({url_perfil, nickname, username, createdAt}:PerfilImagenInfo){
    return(
        <div className="flex">
        <img
            className="w-10 rounded-full mr-3"
            src={url_perfil}
            alt={nickname}
        />
        <div className="flex flex-col">
            <h2 className="text-white font-bold text-[1.5rem]">{nickname}</h2>
            <div className="flex items-center">
                <h3 className="text-white text-[1.1rem]">{username}</h3>
                <p className="text-miGris-200 mb-0 ml-2 text-[.9rem]">{convertirFechaHora(createdAt)}</p>
            </div>
        </div>
    </div>
    );
}