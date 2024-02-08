import React from "react";
import { useAppSelector } from "../toolkit/store";
import { Redirigir } from "./Redirigir";
import { rutas } from "../Routes";

export  function AddImage() {
  const state = useAppSelector(state=>state.social);
  if(!state.token) return <Redirigir ruta={rutas.login}/>
  return <div>AddImage</div>;
}
