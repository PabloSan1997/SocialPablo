/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import { rutas } from "../Routes";
import logo from '/logo.svg';
import { useAppDispatch, useAppSelector } from '../toolkit/store';
import { useCookies } from 'react-cookie';
import { agregarToken } from '../toolkit/slices/socialSice';

export function Header() {
  const locacion = useLocation();
  const navegar = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.social);
  const [_cookie, _setCookie, removeCookie] = useCookies(['myToken'])
  const botonHome = () => {
    if (state.token) {
      navegar(rutas.home);
    }
  }
  const logout = () => {
    removeCookie('myToken');
    dispatch(agregarToken({ token: '' }));
  }
  return (
    <header className="bg-miAzul-950 flex items-center py-2">
      <h1 onClick={botonHome} className="ml-5"><img className='w-10' src={logo} alt="" /></h1>
      {locacion.pathname === rutas.login ? (
        <button
          className="text-green-50 ml-auto mr-5 text-lg hover:underline"
          onClick={() => navegar(rutas.create)}
        >Crear Cuenta</button>
      ) : null}
      {locacion.pathname === rutas.create ? (
        <button
          className="text-green-50 ml-auto mr-5 text-lg hover:underline"
          onClick={() => navegar(rutas.login)}
        >Login</button>
      ) : null}
      {
        state.token ? (
          (
            <>
              <button
                className="text-green-50 ml-auto mr-5 text-lg hover:underline"
                onClick={()=>navegar(rutas.profile)}
              >{state.nickname}</button>
              <button
                className="text-green-50 ml-0 mr-5 text-base hover:underline"
                onClick={logout}
              >Logout</button>
            </>
          )
        ) : null
      }
    </header>
  );
}
