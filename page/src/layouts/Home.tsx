/* eslint-disable react-hooks/exhaustive-deps */

import { routesStorage } from "../utilities/userStorage";
import { useLocation } from 'react-router-dom';
import { rutas } from "../Routes";
import { useAppDispatch, useAppSelector } from "../toolkit/store";
import { Redirigir } from "./Redirigir";
import { ImagenGenerica } from "../components/ImagenesGenericas";
import { eliminarImagenUna } from "../toolkit/slices/socialSice";
import React from "react";


export function Home() {
  const location = useLocation();
  routesStorage.guardar(location.pathname);
  const state = useAppSelector(state => state.social);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(eliminarImagenUna());
  }, []);
  if (!state.token) return <Redirigir ruta={rutas.login} />
  return (
    <div
      className='w-[80%] m-auto my-5'
    >
      {state.imagenes.map(i => (
        <ImagenGenerica key={i.id_imagen} {...i} />
      ))}
    </div>
  );
}
