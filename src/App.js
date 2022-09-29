import { Route, Routes } from 'react-router-dom';
import EditMovie from './components/EditMovie';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element={<>
                <AddMovie/>
                <Filter/>
                <MovieList/></>}>
          </Route>
          <Route path='/:title' element={<EditMovie/>}/>
          <Route path='/login' element={<Login/>}/>

      

      </Routes>



    </div>
  );
}

export default App;
