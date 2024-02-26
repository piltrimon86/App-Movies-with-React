import React from 'react'

const MovieEdit = ({ movie, getMovies, setEdit, setListState }) => {
    const title_component = 'Editar Película'

    const saveEdition = (e, id) => {
        e.preventDefault()

        // Conseguir el target del Evento

        let target = e.target

        // Buscar el índice de la película a actualizar

        const storedMovies = getMovies()
        const index = storedMovies.findIndex((movie) => movie.id === id)

        // Crear objeto con ese índice, título y descripción

        const updatedMovie = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        // Actualizar el elemento con ese índice

        storedMovies[index] = updatedMovie

        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem('movies', JSON.stringify(storedMovies))

        // Actualizar los estados
        setListState(storedMovies)
        setEdit(0)
    }
    return (
        <div className="edit_form">
            <h3 className="title">{title_component}</h3>
            <form onSubmit={(e) => saveEdition(e, movie.id)}>
                <input
                    type="text"
                    name="title"
                    className="edit_title"
                    defaultValue={movie.title}
                />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className="edit_description"
                />
                <input type="submit" value="Actualizar" />
            </form>
        </div>
    )
}

export default MovieEdit
