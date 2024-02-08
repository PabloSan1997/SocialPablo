
import React from "react";
import { useAppDispatch, useAppSelector } from "../toolkit/store";
import { loginExtraReducer } from "../toolkit/slices/socialExtraReducers";
import { Redirigir } from "./Redirigir";
import { routesStorage } from "../utilities/userStorage";
import { cambiarTextoError } from "../toolkit/slices/socialSice";


export function Login() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.social);
  const [datos, setDatos] = React.useState<LoginInterface>({username:'', password:''});
  const textoError = state.textoError;
  const escribirUser = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setDatos({...datos, username:e.target.value});
  } 
  const escribirPassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setDatos({...datos, password:e.target.value});
  } 
  const subir = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(datos.username && datos.password){
      dispatch(loginExtraReducer(datos));
    }else{
      if(!datos.password){
        dispatch(cambiarTextoError({error:'Escriba su contraseña'}));
      }
      if(!datos.username){
        dispatch(cambiarTextoError({error:'Escriba su usuario'}));
      }
    }
    
  }
  if(state.token) return <Redirigir ruta={routesStorage.leer()}/>
  return (
    <form
      onSubmit={subir}
      className="border-2 border-miAzul-700 w-1/2 flex flex-col m-auto mt-20 bg-miAzul-950 p-2 rounded-lg"
    >
      <h2 className="text-miAzul-50 text-3xl m-auto">Login</h2>
      <div className="flex flex-col w-[80%] m-auto">
        <label
          htmlFor="username"
          className="text-miAzul-50 mb-1 text-lg"
        >Usuario</label>
        <input
          type="text"
          id="username"
          placeholder="Escribir"
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
          onChange={escribirUser}
          value={datos.username}
        />
        <label
          htmlFor="password"
          className="text-miAzul-50 mb-1 text-lg"
        >Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escribir"
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
          onChange={escribirPassword}
          value={datos.password}
        />
      </div>
      <button
        type="submit"
        className="text-miGris-50 text-xl mb-5 border-2 border-miAzul-400 w-fit m-auto py-1 px-5 rounded-lg hover:bg-miAzul-400"
      >Entrar</button>
    {textoError?
    <p
    className="text-red-200 mt-1 ml-[10%]"
    >{textoError}</p>:
    null
  }
    </form>
  );
}
