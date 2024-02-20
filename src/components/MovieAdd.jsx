import React, { useState } from 'react'
import SaveInStorage from '../helpers/SaveInStorage'

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

        SaveInStorage('movies', movie)
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
