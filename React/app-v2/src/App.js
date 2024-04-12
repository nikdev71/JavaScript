import './App.css';
import About from './less2/About/About';
import Contact from './less2/Contact';
import Navigation from './less2/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Price from './less2/About/Price';
import UserList from './less2/About/User/UserList';
import BookList from './Book/BookList';
import Display from './Display/Display';
import Counter from './less5/counter';
import Counter2 from './less5/Counter2';
import BoldButton from './less5/BoldFunc';
import BoldClass from './less5/BoldClass';
import Theme from './less5/Theme';

function App() {
  return (
    <Router>
  {/* <div className="container">
        <Navigation/>
      </div> */}
        {/* <UserList/> */}
        {/* <BookList/> */}
          {/* <Display/> */}
    {/* <main>
          <Routes>
            <Route path='/Price' element={<Price/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </main> */}
      {/* <Counter/> */}
      <Theme/>
      {/* <BoldButton/> */}
        </Router>
  );
}

export default App;
