import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MafiaContext } from './MafiaContext';

export const MafiaList = () => {
  const { cards } = useContext(MafiaContext);
  return (
    <>
    <h1 >Card List</h1> 
    <div className="cards">
      {cards.map(card => (
        <div key={card.id}>
          <Link to={`/Mafia/card/${card.id}`}>
            <img src={card.img} alt={card.id}/>
          </Link>
        </div>
      ))}
    </div>
    </>
  ); 
};
