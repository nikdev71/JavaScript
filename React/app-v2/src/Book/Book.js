import React from 'react'
import classes from './Book.module.css'

function Book(props) {
    return (
        <div className={classes.item}>
            <h2>{props.book.title}</h2>
            <p>{props.book.author}</p>
            <p>{props.book.genre}</p>
            <img src={props.book.img}/>
        </div>
    )
}

export default Book
