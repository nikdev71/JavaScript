import './App.css';
import About from './less2/About/About';
import Contact from './less2/Contact';
import Navigation from './less2/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Price from './less2/About/Price';
import UserList from './less2/About/User/UserList';
import BookList from './Book/BookList';
import Display from './Display/Display';

function App() {
  return (
    <Router>
  {/* <div className="container">
        <Navigation/>
      </div> */}
        {/* <UserList/> */}
        {/* <BookList/> */}
          <Display/>
    {/* <main>
          <Routes>
            <Route path='/Price' element={<Price/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </main> */}
      </Router>
  );
}

export default App;
