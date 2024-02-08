import { Navigate } from "react-router-dom";

export function Redirigir({ruta}:{ruta:string}){
    return(
        <Navigate to={ruta}/>
    );
}