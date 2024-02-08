
import { routesStorage } from "../utilities/userStorage";
import { useLocation } from "react-router-dom";
import { Redirigir } from "./Redirigir";
import { rutas } from "../Routes";
import { useAppSelector } from "../toolkit/store";

export function Imagefull() {
  const location = useLocation();
  routesStorage.guardar(location.pathname);
  const state = useAppSelector(state=>state.social);
  if(!state.token) return <Redirigir ruta={rutas.login}/>
  return <div>Imagefull</div>;
}
