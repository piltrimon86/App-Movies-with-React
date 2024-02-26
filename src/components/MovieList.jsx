import React, { useEffect, useState } from 'react'
import MovieEdit from './MovieEdit'

const MovieList = ({ listState, setListState }) => {
    // const [listState, setListState] = useState([])

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'))
        setListState(movies)
        return movies
    }

    const deleteMovie = (id) => {
        // Conseguir películas almacenadas
        let storedMovies = getMovies()

        // Filtrar esas películas para que elimine del array la que quiero borrar
        let newMovieList = storedMovies.filter(
            (movie) => movie.id !== parseInt(id)
        )

        // Actualizar el estado del listado
        setListState(newMovieList)

        // Actualizar los datos en el LocalStorage
        localStorage.setItem('movies', JSON.stringify(newMovieList))
    }

    return (
        <>
            {listState != null ? (
                listState.map((movie) => {
                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
                            <button
                                className="edit"
                                onClick={() => setEdit(movie.id)}>
                                Editar
                            </button>
                            <button
                                className="delete"
                                onClick={() => deleteMovie(movie.id)}>
                                Borrar
                            </button>

                            {/* FORMULARIO DE EDITAR */}

                            {edit === movie.id && (
                                <MovieEdit
                                    movie={movie}
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setListState={setListState}
                                />
                            )}
                        </article>
                    )
                })
            ) : (
                <h2>No hay películas para mostrar. Añada las que desee.</h2>
            )}
        </>
    )
}
export default MovieList
