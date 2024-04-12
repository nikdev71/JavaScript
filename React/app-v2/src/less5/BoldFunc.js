import React, { useState } from 'react';
import './bold.css'

function BoldButton() {
    const [isBold, setIsBold] = useState(false);

    const toggleBold = () => {
        setIsBold(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleBold}>Жирный</button>
            <p className={isBold ? 'bold' : ''}>Текст</p>
        </div>
    );
}

export default BoldButton;
