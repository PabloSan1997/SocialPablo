
import React from "react";

export function Login() {
  return (
    <form
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
        />
      </div>
      <button
        type="submit"
        className="text-miGris-50 text-xl mb-5 border-2 border-miAzul-400 w-fit m-auto py-1 px-5 rounded-lg hover:bg-miAzul-400"
      >Entrar</button>
    </form>
  );
}
