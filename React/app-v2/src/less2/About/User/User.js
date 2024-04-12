import React from 'react'
import classes from './User.module.css'

function User(props) {
    return (
        <div className={classes.item}>
        <p>{props.user.name}</p>
        <p>{props.user.age}</p>
        <p>{props.user.group}</p>
        </div>
    )
}

export default User
