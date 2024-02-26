import React, { useEffect, useState } from 'react'

const MovieList = () => {
    const [listState, setListState] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'))
        setListState(movies)
    }

    return (
        <>
            {listState != null ? (
                listState.map((movie) => {
                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    )
                })
            ) : (
                <h2>No hay películas par mostrar</h2>
            )}
        </>
    )
}
export default MovieList
