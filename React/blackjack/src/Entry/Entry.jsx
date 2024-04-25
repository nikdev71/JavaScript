import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Entry() {
    const [name, setName] = useState('');
    const [wallet, setWallet] = useState('')
    const navigate = useNavigate();

    const startGame = () =>{
        const money = wallet.slice(1);
        if(name && wallet){
            navigate('/Game', {state : {name: name, wallet: parseInt(money,10) }})
        }
    }
    const handleWalletChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, ''); 
        setWallet(`$${numericValue}`); 
      };

    return (
        <form className='entryform'>
            <label>Your name:</label>
            <input type="text"
                   placeholder='Name'
                   value={name}
                   onChange={(e)=> setName(e.target.value)} />
            <label>Your wallet:</label>
            <input type="text"
                   placeholder='Wallet'
                   value={wallet}
                   onChange={handleWalletChange} />
            <button onClick={startGame}>Start Game</button>
        </form>
    )
}

export default Entry
