

export function convertirFechaHora(fecha: string):string {
    const fechaHora = new Date(fecha);

    // Obtener componentes de fecha y hora
    let dia: number | string = fechaHora.getDate();
    let mes: number | string = fechaHora.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
    const anio: number | string = fechaHora.getFullYear();
    let horas: number | string = fechaHora.getHours();
    let minutos: number | string = fechaHora.getMinutes();

    // Añadir ceros iniciales si es necesario
    if (mes < 10) {
        mes = "0" + mes;
    }
    if (dia < 10) {
        dia = "0" + dia;
    }
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
}