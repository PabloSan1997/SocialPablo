

export const userStorage = {
    leer:()=>{
        if(!localStorage.nick ){
            localStorage.nick = '';
        }
        return localStorage.nick
    },
    guardar:(nick:string)=>{
        localStorage.nick = nick;
    }
}

export const routesStorage = {
    leer:()=>{
        if(!localStorage.rutas ){
            localStorage.rutas = '/login';
        }
        return localStorage.rutas
    },
    guardar:(rutas:string)=>{
        localStorage.rutas = rutas;
    }
}