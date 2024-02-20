import Footer from './components/Footer'
import Header from './components/Header'
import MovieAdd from './components/MovieAdd'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import Navigation from './components/Navigation'

const App = () => {
    return (
        <div className="layout">
            <Header />
            <Navigation />
            {/* Contenido principal */}
            <MovieList />
            {/* Barra lateral */}
            <aside className="lateral">
                <MovieSearch />
                <MovieAdd />
            </aside>
            {/* Pie de página */}
            <Footer />
        </div>
    )
}

export default App
