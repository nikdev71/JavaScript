import React from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navigate =useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        navigate('/')
    }

    return (
        <>
        <h1>Login</h1>
        <form action=""  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email'/>
            </div>
            <div>
                <label htmlFor="pass">Password:</label>
                <input type="password" name='pass'/>
            </div>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Login
