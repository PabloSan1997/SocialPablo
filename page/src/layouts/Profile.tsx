
import { useLocation, useParams } from 'react-router-dom';
import { rutas } from '../Routes';
import { useAppSelector } from '../toolkit/store';
import { routesStorage } from '../utilities/userStorage';
import { Redirigir } from './Redirigir';

export function Profile() {
  const parametro = useParams();
  console.log(parametro);
  const location = useLocation();
  routesStorage.guardar(location.pathname);
  const state = useAppSelector(state => state.social);

  if (!state.token) return <Redirigir ruta={rutas.login} />
  return <div>Profile</div>;
}
