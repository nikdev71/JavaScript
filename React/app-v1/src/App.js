import React, { PureComponent } from 'react'
import City from './City/city'
import Book from './Book/book'
import './App.css'
import Header from './Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Person from './Person/Person'


class App extends PureComponent {
  render() {
    return (
      <>
      <Router>
          <Header/>
          <Routes>
                <Route path='/Person' element={<Person/>}/>
                <Route path='/Book' element={<Book/>}/>
                <Route path='/City' element={<City/>}/>
          </Routes>
      </Router>
    </>
    )
  }
}

export default App
