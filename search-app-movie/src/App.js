import './App.css';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
    <SearchBar></SearchBar>
    <div className="App">
    <Movies></Movies>
    <MovieDetails></MovieDetails>
    </div>
    
    </div>
  );
}

export default App;
