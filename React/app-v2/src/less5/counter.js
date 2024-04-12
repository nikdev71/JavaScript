import MyButton from './MyButton'
import React, { useState } from 'react'


function Counter() {
    const[count, setCount] = useState(0)

    function handle(){
        setCount(c =>count+1);
    }

    return (
        <>
        <h2>Counter</h2>
        <MyButton count={count} onClick={handle}/>
        <MyButton count={count} onClick={handle}/>
        </>
    )
}

export default Counter
