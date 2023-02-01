/*
Crea un boton tipo de checkbox con clases predeterminadas, cuando captura un evento de click, 
llama a la función completeTask que recibe el evento, extrae la etiqueta donde sucedió el mismo con el atributo target.
Continua la explicación en la línea 15 
*/
export const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};

const completeTask = (event, id) => {
  const element = event.target;
  /*
  Con el método toggle, dependiendo de lo que reciba por parámetro compruebo si existe, lo elimino, si no existe, lo agrego,
  de ésta manera logro un comportamiento dinámico en el cuál cada vez que haga click se marca y desmarca o viceversa una tarea
  */
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  
  const tasks = JSON.parse(localStorage.getItem("tasks")); //Obtengo las tareas del localStorage convertidas a objeto
  const index = tasks.findIndex((item) => item.id === id); //Obtenemos el índice del elemento seleccionado
  tasks[index]["complete"] = !tasks[index]["complete"]; //Modificamos el elemento seleccionado, ingresando al arreglo gracias al index y modifcando su valor "complete" es decir, invertiendolo
  localStorage.setItem("tasks", JSON.stringify(tasks)); //Modificamos el localStorage con el arreglo modificado
};
//export default checkComplete;
