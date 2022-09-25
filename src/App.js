import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className="App">
      <AddMovie/>
      <Filter/>
      <MovieList/>
    </div>
  );
}

export default App;
