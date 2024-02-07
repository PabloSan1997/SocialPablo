import React from "react";

export function CreateUser() {
  return (
    <form
      className="border-2 border-miAzul-700 w-1/2 flex flex-col m-auto mt-5 bg-miAzul-950 p-2 rounded-lg mb-5"
    >
      <h2
        className="text-miAzul-50 text-3xl m-auto"
      >Crear cuenta</h2>
      <div
        className="flex flex-col w-[80%] m-auto"
      >
        <label
          htmlFor="username"
          className="text-miAzul-50 mb-1 text-lg"
        >Username</label>
        <input
          type="text"
          id="username"
          placeholder="Escribir..."
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
        />
        <label
          htmlFor="nombrecom"
          className="text-miAzul-50 mb-1 text-lg"
        >Nombre</label>
        <input
          type="text"
          id="nombrecom"
          placeholder="Escribir..."
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
        />
        <label
          htmlFor="passwordnew"
          className="text-miAzul-50 mb-1 text-lg"
        >Password</label>
        <input
          type="text"
          id="passwordnew"
          placeholder="Escribir..."
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
        />
        <label
          htmlFor="descripcion"
          className="text-miAzul-50 mb-1 text-lg"
        >Descripción</label>
        <textarea
          id="descripcion"
          placeholder="Escribir..."
          className="mb-5 resize-none p-1 px-2 rounded-md h-20 outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
        ></textarea>
        <label
          htmlFor="url_perfil"
          className="text-miAzul-50 mb-1 text-lg"
        >Foto de Perfil</label>
        <input
          type="text"
          id="url_perfil"
          placeholder="Escribir..."
          className="mb-5 p-1 px-2 rounded-md outline-none bg-miGris-800 placeholder:text-miGris-400 text-miAzul-50"
        />
        <button
          type="submit"
          className="text-miGris-50 text-xl mb-2 border-2 border-miAzul-400 w-fit m-auto py-1 px-5 rounded-lg hover:bg-miAzul-400"
        >Crear cuenta</button>
      </div>
    </form>
  );
}
