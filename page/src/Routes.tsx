/* eslint-disable react-refresh/only-export-components */
import { useRoutes, HashRouter } from 'react-router-dom';
import { Login } from './layouts/Login';
import { Home } from './layouts/Home';
import { Profile } from './layouts/Profile';
import { CreateUser } from './layouts/CreateUser';
import { AddImage } from './layouts/AddImage';
import { Imagefull } from './layouts/Imagefull';

export const rutas = {
    login: '/login',
    home: '/home',
    profile: '/profile',
    profileid: '/profile/:username',
    create: '/create',
    addImage: '/addImage',
    image: '/image/:id_imagen'
}

const rutasLista = [
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
    }
];

export function MisRutas({ children }: Children) {
    const Rutas = () => useRoutes(rutasLista);
    return (
        <HashRouter>
            {children}
            <Rutas />
        </HashRouter>
    );
}