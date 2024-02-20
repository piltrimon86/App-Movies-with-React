import React, { useState } from 'react'

const MovieAdd = () => {
    const titleComponent = 'Añadir Película'

    const [movieState, setMovieState] = useState({
        title: '',
        description: '',
    })

    const { title, description } = movieState

    const getDataForm = (e) => {
        e.preventDefault()

        // Conseguir los datos del formulario
        let target = e.target
        let title = target.title.value
        let description = target.description.value

        // Crear objeto de la película a guardar

        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description,
        }

        // Guardar Estado
        setMovieState(movie)

        // Guardar en el almacenamiento local (LocalStorage)

        saveInStorage(movie)
    }

    const saveInStorage = (movie) => {
        // Conseguir los elementos que ya tenemos en localStorage

        let items = JSON.parse(localStorage.getItem('movies'))

        // Comprobar si es un array

        if (Array.isArray(items)) {
            // Añadimos dentro del array si el item es un array
            items.push(movie)
        } else {
            // En caso que no sea un array, creamos un array nuevo con la nueva peli
            items = [movie]
        }

        // Guardar en el localStorage

        localStorage.setItem('movies', JSON.stringify(items))
        // Devolver un objeto

        return movie
    }

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {title && description && 'Has creado la película: ' + title}
            </strong>
            <form onSubmit={getDataForm}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Título"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default MovieAdd
