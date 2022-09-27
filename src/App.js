import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <div className='page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='drift' element={<DriftPage />} />
          <Route path='timeattack' element={<TimeAttackPage />} />
          <Route path='forza' element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;