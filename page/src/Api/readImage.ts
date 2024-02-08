import { apiConfig } from "./config";


const imagenApi = `${apiConfig.url}/api/v1/imagen`;

export async function readImages():Promise<ImagenInterface[]>{
    const ft = await fetch(imagenApi);
    if(!ft.ok) throw 'Error con las imagenes';
    const imagenes = ft.json();
    return imagenes;
}