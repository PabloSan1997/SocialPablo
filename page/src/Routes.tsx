/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useRoutes, HashRouter, Navigate } from 'react-router-dom';
import { Login } from './layouts/Login';
import { Home } from './layouts/Home';
import { Profile } from './layouts/Profile';
import { CreateUser } from './layouts/CreateUser';
import { AddImage } from './layouts/AddImage';
import { Imagefull } from './layouts/Imagefull';
import { useCookies } from 'react-cookie';
import React from 'react';
import { agregarToken } from './toolkit/slices/socialSice';
import { useAppDispatch, useAppSelector } from './toolkit/store';
import { routesStorage, userStorage } from './utilities/userStorage';
import { readImagesExtraReduce } from './toolkit/slices/socialExtraReducers';

export const rutas = {
    login: '/login',
    home: '/home',
    profile: '/profile',
    profileid: '/profile/:username',
    create: '/create',
    addImage: '/addImage',
    image: '/image/:id_imagen'
}

const rutasLista = (data: string) => [
    {
        path: rutas.login,
        element: <Login />
    },
    {
        path: rutas.home,
        element: <Home />
    },
    {
        path: rutas.profile,
        element: <Profile />
    },
    {
        path: rutas.profileid,
        element: <Profile />
    },
    {
        path: rutas.create,
        element: <CreateUser />
    },
    {
        path: rutas.addImage,
        element: <AddImage />
    },
    {
        path: rutas.image,
        element: <Imagefull />
    },
    {
        path: '/',
        element: <Navigate to={data ? routesStorage.leer() : rutas.login} />
    }
];

export function MisRutas({ children }: Children) {
    const [cookies, setCookies] = useCookies(['myToken']);
    const dispatch = useAppDispatch();
    const stateSocial = useAppSelector(state => state.social);
    React.useEffect(() => {
        if (cookies.myToken) {
            dispatch(agregarToken({ token: cookies.myToken }));
        } else {
            userStorage.guardar('');
        }
    }, []);
    React.useEffect(() => {
        if (stateSocial.token) {
            setCookies('myToken', stateSocial.token, { maxAge: 1000 });
            dispatch(readImagesExtraReduce());
        }
    }, [stateSocial.token]);
    const Rutas = () => useRoutes(rutasLista(cookies.myToken));
    return (
        <HashRouter>
            {children}
            <Rutas />
        </HashRouter>
    );
}