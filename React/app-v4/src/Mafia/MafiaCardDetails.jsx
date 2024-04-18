import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MafiaContext } from './MafiaContext';

export const CardDetails = () => {
  const { id } = useParams();
  const { cards } = useContext(MafiaContext);
  const card = cards.find(card => card.id === parseInt(id));

  if (!card) return <div>Card not found</div>;

  return (
      <img src={card.img} alt={card.id} />
  );
};
