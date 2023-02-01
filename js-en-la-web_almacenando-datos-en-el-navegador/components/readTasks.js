import { createTask } from "./addTask.js";
import { dateElement } from "./dateElement.js";
import { uniqueDates, orderDates } from "./services/date.js";
export const readTasks = () => {
    const list = document.querySelector("[data-list]") //Obtengo el elemento "ul" del html
    //Obtengo el arreglo que tiene objetos que en cada uno tiene el título y la fecha de cada tarea, si no tiene nada, establezco un arreglo vacio
    const tasksList = JSON.parse(localStorage.getItem("tasks",)) || [];

    const dates = uniqueDates(tasksList); //Arreglo de fechas únicas
    orderDates(dates); //Toma las fechas y las ordena de menor a mayor
    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY"); //Usando momento convertirmos la fecha de String a un formato válido
        list.appendChild(dateElement(date)); //En cada iteración se va ir agregando una fecha única, al "ul"
        tasksList.forEach(task => {
            const taskDateMoment = moment(task.dateFormat, "DD/MM/YYYY"); //Usando momento convertirmos la fecha de String a un formato válido
            const diffDates = dateMoment.diff(taskDateMoment); //Comprueba li diferencia entre las fechas de las tareas y las únicas
            if (diffDates === 0) { //Si la defirencia es igual a 0, entonces ambas fechas son iguales
                list.appendChild(createTask(task)); //Cuando sean igual entonces la tarea de la misma tarea para que queden organizadas
            }
        });
    });
}