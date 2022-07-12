
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormPaper from './components/FormPaper';
import SingleAsteroid from './components/SingleAsteroid';
import Home from './components/Home';
import Id from './components/Id';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/id' element={<Id />} />
        <Route path='/main' element={<FormPaper />} />
        <Route path='/Single' element={<SingleAsteroid />} />

      </Routes>
    </div>
  );
}

export default App;
