import logo from './logo.svg';
import './App.css';
import ViewHome from './views/ViewHome';
import ViewFour from "./views/ViewFour"
import ViewHello from './views/ViewHello';
import {Routes, Route, Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
import ViewYourInput from './views/ViewYourInput';




function App() {


  return (
    <div className="App">
      <h1>Lets Route</h1>
      <Routes>
        <Route path='/' element={<ViewHome />} />
        <Route path='/4' element={<ViewFour />} />
        <Route path='/hello' element={<ViewHello />} />
        <Route path='/hello/:color1/:color2' element={<ViewYourInput />} />
      </Routes>
      
    </div>
  );
}

export default App;
