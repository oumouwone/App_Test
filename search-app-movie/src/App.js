import './App.css';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
    <SearchBar></SearchBar>
    <Movies></Movies>
    <MovieDetails></MovieDetails>
    </div>
  );
}

export default App;
