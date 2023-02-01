import { readTasks } from "./readTasks.js";
/*
Crea un boton tipo de papelera con clases predeterminadas, cuando captura un evento de click, 
llama a la función deleteTask que recibe el evento, extrae la etiqueta padre a partir del evento capturado.
Continua la explicación en la línea 15 
*/
export const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const list = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("tasks")); //Obtengo el arreglo de tareas del localStorage
  const index = tasks.findIndex((item) => item.id === id);
  console.log(index);
  tasks.splice(index, 1);
  console.log(tasks);
  list.innerHTML = '';
  localStorage.setItem("tasks", JSON.stringify(tasks));
  /*
  Con el método parentElement vamos al elemento del padre que lo contiene del evento capturado, y lo removemos
  const parent = event.target.parentElement;
  parent.remove();
  */
  readTasks();
};

//export default deleteIcon;
