/* eslint-disable react-hooks/exhaustive-deps */
import { routesStorage } from "../utilities/userStorage";
import { useLocation, useParams } from "react-router-dom";
import { Redirigir } from "./Redirigir";
import { rutas } from "../Routes";
import { useAppDispatch, useAppSelector } from "../toolkit/store";
import React from "react";
import { readOneImageExtraReduce } from "../toolkit/slices/socialExtraReducers";
import { PerfilImagen } from "../components/perfilImagen";
import { Comentario } from "../components/Comentario";


export function Imagefull() {
  const location = useLocation();
  routesStorage.guardar(location.pathname);
  const state = useAppSelector(state => state.social);
  const dispatch = useAppDispatch();
  const parametros = useParams();
  React.useEffect(() => {
    if (!state.imagen.id_imagen) {
      dispatch(readOneImageExtraReduce({ id_imagen: parametros.id_imagen as string }));
    }
  }, [state.imagen.id_imagen]);

  if (!state.token) return <Redirigir ruta={rutas.login} />
  return (
    <main className="my-8 w-[90%] m-auto">
      <PerfilImagen {...state.imagen.usuario} createdAt={state.imagen.createdAt} />
      <p className="text-white text-[1rem] my-2">{state.imagen.image_description}</p>
      <div className="mt-3 flex flex-col w-full  bg-miAzul-950">
        <img src={state.imagen.url_image} alt="" className="max-w-[90%] mx-auto" />
        <div className="mx-auto w-full">
          <h3
            className="text-miAzul-50 text-xl mt-4 ml-6"
          >Comentarios</h3>
          <div className="flex flex-col">
            {state.imagen.comentarios.map(c => (
              <Comentario key={c.id_comentario} {...c} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
