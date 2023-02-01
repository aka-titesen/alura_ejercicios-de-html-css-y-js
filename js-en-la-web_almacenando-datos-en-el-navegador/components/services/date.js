//Estructura que recibe las tareas por parámetros, filtra las fechas únicas y las devuelve en un arreglo
export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat);
        }
    });
    return unique;
}
//Método que recibe las fechas y las ordena de menor a mayor
export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a,"DD/MM/YYYY");
        const secondDate = moment(b,"DD/MM/YYYY");
        return firstDate - secondDate;
    });
}