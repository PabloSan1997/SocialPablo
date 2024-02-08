
import {useParams} from 'react-router-dom';

export function Profile() {
  const parametro = useParams();
  console.log(parametro);
  return <div>Profile</div>;
}
