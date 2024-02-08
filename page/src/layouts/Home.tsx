import React from "react";
import { routesStorage } from "../utilities/userStorage";
import { useLocation } from 'react-router-dom';
import { rutas } from "../Routes";
import { useAppSelector } from "../toolkit/store";
import { Redirigir } from "./Redirigir";

export function Home() {
  const location = useLocation();
  routesStorage.guardar(location.pathname);
  const state = useAppSelector(state => state.social);
  if (!state.token) return <Redirigir ruta={rutas.login} />
  return <div>Home</div>;
}
