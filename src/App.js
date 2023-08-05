import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import { RequiresAuth } from './components/RequiresAuth';
import Explore from './pages/Explore';

function App() {
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path='/' element={<RequiresAuth><HomePage/></RequiresAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </div>
  );
}

export default App;
