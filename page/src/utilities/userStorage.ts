

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