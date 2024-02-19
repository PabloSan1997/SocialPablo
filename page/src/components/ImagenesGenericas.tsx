import { convertirFechaHora } from "../utilities/convertirFecha";


export function ImagenGenerica({ url_image, image_description, usuario, comentario, createdAt }: ImagenGenericaInterface) {
    const { nickname, username, url_perfil } = usuario;
    return (
        <div className="flex flex-col mb-10">
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
            <p className="text-white text-[1rem] my-2">{image_description}</p>
            <div className="flex flex-col w-full m-auto bg-miGris-900 py-3 rounded-lg">
                <img src={url_image} alt={nickname} className="max-w-[40%] m-auto" />
                <span className="text-white ml-5">Comentarios: {comentario}</span>
            </div>
        </div>
    )
}