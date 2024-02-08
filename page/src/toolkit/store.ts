import {configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { socialReducer } from './slices/socialSice';

export const store = configureStore({
    reducer:{
        social:socialReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;