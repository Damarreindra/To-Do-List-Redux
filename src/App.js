import logo from './logo.svg';
import './App.css';
import { AddTodo, ListPlayer } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages';
import Active from './pages/Active';
import Done from './pages/Done';


function App() {
  return (
    <div className='utama'>
      <h2>&#10024; Aplikasi Todo List &#10024;</h2>
      <Router>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/active' exact element={<Active/>}/>
      <Route path='/done' exact element={<Done/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
