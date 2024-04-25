import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './Entry/Entry';
import GameWrapper from './Game/GameWrapper';

function App() {
  return (
    <>
      <h1 class="animated fadeInRightBig">Blackjack</h1>
      <Router>
          <Routes>
            <Route path='/' element={<Entry/>}/>
            <Route path='/Game' element={<GameWrapper/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
