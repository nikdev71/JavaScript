import React from 'react'
import { useLocation } from 'react-router-dom'
import Game from './Game'

function GameWrapper() {
    const location = useLocation()
    const {state} = location
    console.log(state)
    return (
        <Game locationState={state}/>
    )
}

export default GameWrapper
