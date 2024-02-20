import { PerfilImagen } from "./perfilImagen";


export function Comentario({comentario, usuario, createdAt}:ComentariosGen){
    
    return (
        <div>
            <PerfilImagen {...usuario} createdAt={createdAt}/>
            <p>{comentario}</p>
        </div>
    );
}