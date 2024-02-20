import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../Api/userApi';
import { readImages, readOneImagen } from '../../Api/readImage';


export const loginExtraReducer = createAsyncThunk(
    'loginRequest',
    async (login: LoginInterface): Promise<LoginRespose> => {

        const data = await loginUser(login)
        return data;

    }
);

export const readImagesExtraReduce = createAsyncThunk(
    'readImagenes',
    async (): Promise<ImagenGenericaInterface[]> => {
        const imagenes = readImages();
        return imagenes;
    }
);

export const readOneImageExtraReduce = createAsyncThunk(
    'readOneImage',
    async ({ id_imagen }: { id_imagen: string }): Promise<ImagenUna> => {
        const imagenes = await readOneImagen(id_imagen);
        return imagenes;
    }
);