import React, { useState } from 'react'

const MovieSearch = ({ listState, setListState }) => {
    const [search, setSearch] = useState('')

    const searchMovie = (e) => {
        // Crear estado y actualizarlo
        setSearch(e.target.value)

        // Filtrar el listado para buscar coincidencias
        let moviesSearch = listState.filter((movie) => {
            return movie.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
        })

        if (search.length <= 1 || moviesSearch <= 0) {
            moviesSearch = JSON.parse(localStorage.getItem('movies'))
        }

        //Actualizar el listado principal con lo que he filtrado
        setListState(moviesSearch)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="search"
                    autoComplete="off"
                    onChange={searchMovie}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default MovieSearch
