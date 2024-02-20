const SaveInStorage = (key, element) => {
    // Conseguir los elementos que ya tenemos en localStorage

    let items = JSON.parse(localStorage.getItem(key))

    // Comprobar si es un array

    if (Array.isArray(items)) {
        // Añadimos dentro del array si el item es un array
        items.push(element)
    } else {
        // En caso que no sea un array, creamos un array nuevo con la nueva peli
        items = [element]
    }

    // Guardar en el localStorage

    localStorage.setItem(key, JSON.stringify(items))
    // Devolver un objeto

    return element
}

export default SaveInStorage
