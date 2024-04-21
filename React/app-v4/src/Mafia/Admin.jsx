import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MafiaContext } from './MafiaContext'

function Admin() {
    const {addCard} = useContext(MafiaContext)
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (e)=>{
        setImageUrl( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard({ img: imageUrl });
        setImageUrl('');
      };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder='Enter the image url'
                   value={imageUrl}
                   onChange={handleChange}
                   />
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default Admin
