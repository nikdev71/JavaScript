import React from 'react'
import Book from './Book';
import classes from './Book.module.css'

function BookList2() {
    const booksitems = [
        {
          title: 'Book6',
          author: 'Author1',
          genre: 'Fantasy',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLSpUhgEGgb9642jEvy4vvOoXbJSFEjGPeK77ThoLcGCxEMALQFP3SGpRiKLk-sW44w&usqp=CAU'

        }, 
        {
          title: 'Book7',
          author: 'Author2',
          genre: 'Mystery',
          img: 'https://i.pinimg.com/200x/30/8c/f3/308cf393bce165906bf5645609b91042.jpg'
        },
        {
            title: 'Book8',
            author: 'Author3',
            genre: 'Sci-Fi',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihGc0a6-LRfuZ3Z9cWCmiLxdKwz2ZH5hYYUUxNqS-fKbL9Z-ZVQAmUOY76DXl3vSWYDE&usqp=CAU',
        },
        {
            title: 'Book9',
            author: 'Author4',
            genre: 'Action',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp_xxMj8aLEmM7BNQuhBpVOrw1wFk6f5pO_Sw9xXXSYoQp42zyeR_0qco03sNb6jFpGE&usqp=CAU',
        },
        {
            title: 'Book10',
            author: 'Author5',
            genre: 'Crime',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9qFFPl3rlY03Gl2p3AyML3KaHRCH-zlkk9tcZJTDFNhJeEPJLM8AGLwFOFuZQd3nM_s&usqp=CAU',
        }

      ];
      
      let books = booksitems.map( item=> <Book book={item}/>)
    return (
        <>
        <div className={classes.bookcontainer}>{books}</div>
        </>
    )
}

export default BookList2
