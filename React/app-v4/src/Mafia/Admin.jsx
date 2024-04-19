import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MafiaContext } from './MafiaContext'

function Admin() {
    const {addCard} = useContext(MafiaContext)
    const [imageUrl, setImageUrl] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard({ img: imageUrl });
        setImageUrl('');
      };

    return (
        <form action="">
            <input type="text" 
                   placeholder='Enter the image url'
                   value={imageUrl}
                   onChange={handleSubmit}
                   />
            <button type='submit'></button>
        </form>
    )
}

export default Admin
