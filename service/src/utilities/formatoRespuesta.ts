import { Usuario } from "../dbConfig/Models/Usuario";



export function mostrarUsuarioUno(usuario:Usuario){
    const usu = {...usuario} as Partial<Usuario>;
    delete usu.password;
    return usu;
}