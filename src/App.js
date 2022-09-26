import { Route, Routes } from 'react-router-dom';
import EditMovie from './components/EditMovie';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<>
                <AddMovie/>
                <Filter/>
                <MovieList/></>}>
          </Route>
          <Route path='/:title' element={<EditMovie/>}/>
      </Routes>



    </div>
  );
}

export default App;
