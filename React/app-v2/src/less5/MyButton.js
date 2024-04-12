import React from 'react'

function MyButton({count, onClick}) {
   

    return (
     <>
     <p>{count}</p>
     <button onClick={onClick}>Click me</button>
     </>   
    )
}

export default MyButton
