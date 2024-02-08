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
    perfil: initialPerfil
};

const socialSlice = createSlice({
    name: 'Usuario',
    initialState,
    reducers: {
        agregarToken(state, action: PayloadAction<{ token: string }>) {
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginExtraReducer.fulfilled, (state, action) => {
            const res = action.payload as LoginRespose;
            state.token = res.token;
            state.nickname = res.nickname;
            userStorage.guardar(res.nickname);
        });
        builder.addCase(loginExtraReducer.rejected, (_state, action) => {
            console.log(action.payload);
        });
    }
});


const socialReducer = socialSlice.reducer;
const { agregarToken } = socialSlice.actions;

export { socialReducer, agregarToken }