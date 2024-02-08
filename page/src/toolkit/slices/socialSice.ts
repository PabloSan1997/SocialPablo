import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginExtraReducer } from './socialExtraReducers';
import { userStorage } from '../../utilities/userStorage';


const initialImagen = {
    id_imagen: '', url_image: '', comentarios: [],
    image_description: '',
    usuario: {
        id_user: '',
        nickname: '',
        username: '',
        url_perfil: ''
    }
}

const initialPerfil = {
    usuarioInfo: {
        descripcion: '',
        id_user_info: ''
    },
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
        }
    },
    extraReducers: (builder) => {
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
    }
});


const socialReducer = socialSlice.reducer;
const { agregarToken, cambiarTextoError } = socialSlice.actions;

export { socialReducer, agregarToken, cambiarTextoError }