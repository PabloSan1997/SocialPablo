import {useLocation, useNavigate} from 'react-router-dom';
import { rutas } from "../Routes";
import logo from '/logo.svg';

export function Header() {
  const locacion = useLocation();
  const navegar = useNavigate();
  return (
    <header className="bg-miAzul-950 flex items-center py-2">
      <h1 className="ml-5"><img className='w-10' src={logo} alt="" /></h1>
      {locacion.pathname === rutas.login?(
        <button
        className="text-green-50 ml-auto mr-5 text-lg"
        onClick={()=>navegar(rutas.create)}
        >Crear Cuenta</button>
      ):null}
      {locacion.pathname === rutas.create?(
        <button
        className="text-green-50 ml-auto mr-5 text-lg"
        onClick={()=>navegar(rutas.login)}
        >Login</button>
      ):null}
    </header>
  );
}
