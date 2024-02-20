const App = () => {
    return (
        <div className="layout">
            {/* Cabecera */}
            <header class="header">
                <div class="logo">
                    <div class="play"></div>
                </div>
                <h1>MisPelis</h1>
            </header>

            {/* Barra de Navegación */}
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/#">Inicio</a>
                    </li>
                    <li>
                        <a href="/#">Películas</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contacto</a>
                    </li>
                </ul>
            </nav>

            {/* Contenido Principal */}
            <section className="content">
                {/* Aquí van las películas */}
                <article className="peli-item">
                    <h3 className="title">Título</h3>
                    <p className="description">Descripción de la película</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>

                <article className="peli-item">
                    <h3 className="title">Título</h3>
                    <p className="description">Descripción de la película</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>

                <article className="peli-item">
                    <h3 className="title">Título</h3>
                    <p className="description">Descripción de la película</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>

                <article className="peli-item">
                    <h3 className="title">Título</h3>
                    <p className="description">Descripción de la película</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <div className="search">
                    <h3 className="title">Buscador</h3>
                    <form>
                        <input type="text" />
                        <button>Buscar</button>
                    </form>
                </div>
                <div className="add">
                    <h3 className="title">Añadir Películas</h3>
                    <form>
                        <input type="text" placeholder="Título" />
                        <textarea placeholder="Descripción"></textarea>
                        <input type="submit" value="Guardar" />
                    </form>
                </div>
            </aside>

            {/* Pie de página */}
            <footer className="footer">&copy; App Movies with React</footer>
        </div>
    )
}

export default App
