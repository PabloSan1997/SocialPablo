

export function ImagenGenerica({ url_image, image_description, usuario }: ImagenInterface) {
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
                    <h3 className="text-white">{username}</h3>
                </div>
            </div>
            <p className="text-white text-[1rem] my-2">{image_description}</p>
            <div className="flex flex-col w-full m-auto bg-miGris-900 py-3">
                <img src={url_image} alt={nickname} className="max-w-[40%] m-auto"/>
            </div>
        </div>
    )
}