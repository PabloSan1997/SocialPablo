import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../Api/userApi';
import { readImages } from '../../Api/readImage';


export const loginExtraReducer = createAsyncThunk(
    'loginRequest',
    async (login: LoginInterface): Promise<LoginRespose> => {

        const data = await loginUser(login)
        return data;

    }
);

export const readImagesExtraReduce = createAsyncThunk(
    'readImagenes',
    async (): Promise<ImagenInterface[]> => {
        const imagenes = readImages();
        return imagenes;
    }
);