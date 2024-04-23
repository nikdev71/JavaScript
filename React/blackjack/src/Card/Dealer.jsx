import React from 'react'
import Card from './Card'

function Dealer  ({dealer, gameOver, message})  {
  return (
    <div className="dealer">
      <h2>Dealer</h2>
      <p>Dealer's Hand ({dealer.count})</p>
      <table className="cards">
        <tr>
          { dealer.cards.map((card, i) => {
            return <Card key={i} number={card.number} suit={card.suit}/>;
          }) }
        </tr>
      </table>
      <p>{message}</p>
    </div>
  );
}

export default Dealer