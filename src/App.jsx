import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieAdd from './components/MovieAdd'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import Navigation from './components/Navigation'

const App = () => {
    const [listState, setListState] = useState([])

    return (
        <div className="layout">
            <Header />
            <Navigation />
            {/* Contenido principal */}
            <section className="content">
                <MovieList listState={listState} setListState={setListState} />
            </section>
            {/* Barra lateral */}
            <aside className="lateral">
                <MovieSearch />
                <MovieAdd setListState={setListState} />
            </aside>
            {/* Pie de página */}
            <Footer />
        </div>
    )
}

export default App
