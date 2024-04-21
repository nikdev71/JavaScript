import React, { createContext, useState } from 'react';

export const MafiaContext = createContext();

export const MafiaContextProvider = ({ children }) => {
  const [cards,setCards] = useState([
    { id: 1,  img: 'https://i.pinimg.com/564x/ef/41/a6/ef41a63f289d5c93e9e3c4fbf8a40429.jpg' },
    { id: 2,  img: 'https://i.pinimg.com/564x/95/d9/d7/95d9d75bd7b5dc726ae4df1df8ce22f1.jpg'},
    { id: 3,  img: 'https://i.pinimg.com/736x/32/95/8b/32958beadd62eb1ba68b29dd24cd322f.jpg' },
    { id: 4,  img: 'https://i.pinimg.com/564x/36/8e/3f/368e3f744e15dc114636d6920f2ea999.jpg' },
    { id: 5,  img: 'https://i.pinimg.com/564x/1e/96/7c/1e967c61f92fbcb0e07f8aca61b42c7d.jpg' },
    { id: 6,  img: 'https://i.pinimg.com/736x/55/8d/05/558d0593077791aebf733a815b0ecebc.jpg' },
    { id: 7,  img: 'https://i.pinimg.com/564x/4c/93/05/4c9305ead3c39d158f7987c288aa3eb1.jpg' },
    { id: 7,  img: 'https://i.pinimg.com/564x/bc/02/6a/bc026ab0d1033f3c6ef6847d4f3a9c94.jpg' },
  ]);

  const addCard =(newCard)=>{
    setCards([...cards,{ id: Date.now(), ...newCard }])
  }

  return (
    <MafiaContext.Provider value={{ cards, addCard }}>
      {children}
    </MafiaContext.Provider>
  );
};
