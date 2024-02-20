import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginExtraReducer, readImagesExtraReduce, readOneImageExtraReduce } from './socialExtraReducers';
import { userStorage } from '../../utilities/userStorage';


const initialImagen = {
    id_imagen: '', url_image: '', comentarios: [],
    image_description: '',
    createdAt: '',
    usuario: {
        id_user: '',
        nickname: '',
        username: '',
        url_perfil: '',
        createdAt: ''
    }
}

const initialPerfil = {
    usuarioInfo: {
        descripcion: '',
        id_user_info: '',
        createdAt: '',
        updateAt: ''
    },
    createdAt: '',
    imagenes: [],
    id_user: '',
    username: '',
    nickname: '',
    url_perfil: ''
}

const initialState: InitialState = {
    token: '',
    nickname: userStorage.leer(),
    imagenes: [],
    imagen: initialImagen,
    perfil: initialPerfil,
    textoError: ''
};

const socialSlice = createSlice({
    name: 'Usuario',
    initialState,
    reducers: {
        agregarToken(state, action: PayloadAction<{ token: string }>) {
            state.token = action.payload.token;
        },
        cambiarTextoError(state, action: PayloadAction<{ error: string }>) {
            state.textoError = action.payload.error;
        },
        eliminarImagenUna(state) {
            state.imagen = initialImagen;
        }
    },
    extraReducers: (builder) => {
        //---------------Login-------------
        builder.addCase(loginExtraReducer.fulfilled, (state, action) => {
            const res = action.payload as LoginRespose;
            state.token = res.token;
            state.nickname = res.nickname;
            state.textoError = '';
            userStorage.guardar(res.nickname);
        });
        builder.addCase(loginExtraReducer.rejected, (state, action) => {
            const texto = action.error.message;
            state.textoError = texto ? texto : 'Error';
        });

        //----------------Imagenes--------------
        builder.addCase(readImagesExtraReduce.fulfilled, (state, action) => {
            state.imagenes = [...action.payload]
        });

        //------------------Una imagen-------------------
        builder.addCase(readOneImageExtraReduce.fulfilled, (state, action) => {
            state.imagen = action.payload;
        });
    }
});


const socialReducer = socialSlice.reducer;
const { agregarToken, cambiarTextoError, eliminarImagenUna } = socialSlice.actions;

export { socialReducer, agregarToken, cambiarTextoError, eliminarImagenUna }