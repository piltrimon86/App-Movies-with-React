import React from 'react'

const MovieAdd = () => {
    return (
        <div className="add">
            <h3 className="title">Añadir Películas</h3>
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default MovieAdd
