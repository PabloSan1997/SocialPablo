import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../Api/userApi';


export const loginExtraReducer = createAsyncThunk(
    'loginRequest',
    async (login: LoginInterface): Promise<LoginRespose|BoomError> => {
        try {
            const data = await loginUser(login)
            return data;
        } catch (error) {
            return error as BoomError;
        }
    }
);