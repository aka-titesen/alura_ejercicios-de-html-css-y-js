//Crea una estructura list item (li) donde dentró ira la fecha. Ésto será para clasificar las fechas
export const dateElement = (date) => {
    const dateElemento = document.createElement("li");
    dateElemento.classList.add("date");
    dateElemento.innerHTML = date;
    return dateElemento; //Retorna el li con la fecha establecida
}