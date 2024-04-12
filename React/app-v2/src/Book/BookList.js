import React from 'react'
import Book from './Book';
import classes from './Book.module.css'

function BookList() {
    const booksitems = [
        {
          title: 'Book1',
          author: 'Author1',
          genre: 'Fantasy',
          img: 'https://cs11.pikabu.ru/post_img/big/2018/12/09/9/15443711151883240.jpg'

        }, 
        {
          title: 'Book2',
          author: 'Author2',
          genre: 'Mystery',
          img: 'https://upload.wikimedia.org/wikipedia/ru/1/10/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%22%D0%9D%D0%B0%D0%B2%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%22%2C_%D0%9C%D0%B0%D0%BA%D1%81_%D0%A4%D1%80%D0%B0%D0%B9.jpg'
        },
        {
            title: 'Book3',
            author: 'Author3',
            genre: 'Sci-Fi',
            img:'https://marketplace.canva.com/EADx4IPoPNo/1/0/1024w/canva-%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D0%B2-%D0%B6%D0%B0%D0%BD%D1%80%D0%B5-%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%B0-%D1%81-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BC%D0%BE%D0%BD%D0%BE%D1%85%D1%80%D0%BE%D0%BC%D0%BD%D0%BE%D0%B9-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%BB%D0%B5%D1%81%D0%B0-iRBldJ_jyLw.jpg',
        },
        {
            title: 'Book4',
            author: 'Author4',
            genre: 'Action',
            img:'https://i.pinimg.com/236x/29/e9/0f/29e90fbcac66748657516eb12f85832c.jpg',
        },
        {
            title: 'Book5',
            author: 'Author5',
            genre: 'Crime',
            img:'https://i.pinimg.com/236x/7f/22/d5/7f22d598d7993db72141ce8bd3826b5b.jpg',
        }

      ];
      
      let books = booksitems.map( item=> <Book book={item}/>)
    return (
        <>
        <div className={classes.bookcontainer}>{books}</div>
        </>
    )
}

export default BookList
