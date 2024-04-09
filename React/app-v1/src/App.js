import React, { PureComponent } from 'react'
import FIO from './FIO/FIO'
import Contact from './Contacts/Contact'
import Email from './Email/email'
import City from './City/city'
import Book from './Book/book'
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <>
      <div class="personal-info">
        <FIO/>
        <Contact/>
        <Email/>
      </div>
      
      <div class="location">
        <City/>
      </div>
    
      <div class="book-info">
        <Book/>
      </div>
    </>
    
    )
  }
}

export default App
