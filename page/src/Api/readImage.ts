import { apiConfig } from "./config";


const imagenApi = `${apiConfig.url}/api/v1/imagen`;

export async function readImages():Promise<ImagenGenericaInterface[]>{
    const ft = await fetch(imagenApi);
    if(!ft.ok) throw 'Error con las imagenes';
    const imagenes = ft.json();
    return imagenes;
}

export async function readOneImagen(id_imagen: string){
    const ft = await fetch(`${imagenApi}/${id_imagen}`);
    if(!ft.ok) throw 'Not found';
    return ft.json();
}