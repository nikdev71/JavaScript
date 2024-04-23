import React, { useContext, useState } from 'react';
import { MafiaContext } from './MafiaContext';

function Admin() {
  const { addCard, deleteCard, editCard, cards } = useContext(MafiaContext);
  const [imageUrl, setImageUrl] = useState('');
  const [editCardId, setEditCardId] = useState(null);

  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editCardId) {
      editCard(editCardId, imageUrl);
      setEditCardId(null);
    } else {
      addCard({ img: imageUrl });
    }
    setImageUrl('');
  };

  const handleEdit = (cardId, img) => {
    setEditCardId(cardId);
    setImageUrl(img);
  };

  const handleDelete = (cardId) => {
    deleteCard(cardId);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter the image URL'
          value={imageUrl}
          onChange={handleChange}
        />
        <button type='submit'>
          {editCardId ? 'Update Card' : 'Add Card'}
        </button>
      </form>

      <ul style={{listStyleType: "none"}}>
        {cards.map((card) => (
          <li  key={card.id}>
            <img src={card.img} alt={`Card ${card.id}`} style={{maxWidth: "200px"}} />
            <button onClick={() => handleEdit(card.id, card.img)}>Edit</button>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Admin;
