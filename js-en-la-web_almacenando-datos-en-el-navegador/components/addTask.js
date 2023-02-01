import { checkComplete } from './checkComplete.js'
import { deleteIcon } from './deleteIcon.js'
import { readTasks } from './readTasks.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    //Recuperamos el tag "input" de tipo text donde el usuario coloca el texto de la tarea
    const input = document.querySelector('[data-form-input]');
    //Recuperamos el tag "input" de tipo date donde el usuario elige la fecha y al hora
    const calendar = document.querySelector('[data-form-date]');
    //Obtenemos el valor de input
    const value = input.value;
    //Obtenemos el valor de calendar
    const date = calendar.value;
    //Le establecemos un formato a la fecha (date)
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if (value === '' || date === '') {
        return;
    }

    //Vaciamos el input en donde el usuario ingreso el texto
    input.value = '';
    //Vaciamos el calendar donde el usuario ingreso la fecha
    calendar.value = '';

    const complete = false;

    //Guardamos la descripción de la tarea (texto y fecha) en éste objeto
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    //Vaciamos la lista "ul"
    list.innerHTML = '';

    /*
    Con la llave task recuperamos la información del localStorage con la llave "tasks" si no hay nada, establecemos un arrelgo vacio por defecto
    */
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    //Agruegamos los objetos que contienen cada tarea a un arreglo
    taskList.push(taskObj);
    //Guardamos en localStorage bajo una llave "tasks" el arreglo con la lista de objetos que en cada uno contiene una tarea
    localStorage.setItem('tasks', JSON.stringify(taskList));

    //Objengo las tareas del localStorage y las muestra ordenadas por fechas
    readTasks();
}


export const createTask = ({ value, dateFormat, complete, id }) => {
    //Creamos un list item (li) que irá dentro de un "ul" 
    const task = document.createElement('li');
    //Le agregamos la clase "card"
    task.classList.add('card');
    //Creamos un div donde guardaremos dentro el span con el título de la tarea
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if (complete) {
        /*
         Con el método toggle, dependiendo de lo que reciba por parámetro compruebo si existe, lo elimino, si no existe, lo agrego,
         de ésta manera logro un comportamiento dinámico en el cuál cada vez que haga click se marca y desmarca o viceversa una tarea
         */
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    //Creamos el span
    const titleTask = document.createElement('span');
    //Le agruegamos la clase task
    titleTask.classList.add('task');
    //Al span le asignamos el valor del input donde el usuario escribió la tarea
    titleTask.innerText = value;
    //Al div el agremos el boton check y el título de la tarea
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    //Creamos otro span en éste caso para guardar la fecha
    const dateElement = document.createElement("span");
    //Le asigamos al span la fecha formateada
    dateElement.innerHTML = dateFormat;
    /*
    Al task list item (li) le asignamos el taskContent (div) que contiene el checkbox y el título de la tarea, 
    también el span que contiene la fecha y la el botón para eliminar la tarea
    */
    task.appendChild(taskContent); //Contenido (Titulo + botón checkbox)
    task.appendChild(dateElement); //Fecha
    task.appendChild(deleteIcon(id)); //Botón de eliminado
    return task;
};