import React from 'react'
import Card from './Card'

function Player({ wallet, player, currentBet, gameOver, message, inputChange, placeBet, startNewGame }) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="player">
      <h2>Player</h2>
      <p>Wallet: ${wallet}</p>
      {
        !currentBet ?
          <div className="input-bet">
            <form>
              <input type="text" name="bet" placeholder="" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value);
                inputChange(e);
              }} />
            </form>
            <button onClick={() => {
              placeBet(inputValue);
              setInputValue('');
            }}>Place Bet</button>
          </div>
          : null
      }
      {
        gameOver ?
          <div className="buttons">
            <button onClick={() => { startNewGame('continue') }}>Continue</button>
          </div>
          : null
      }
      <p>Your Hand ({player.count})</p>
      <table className="cards">
        <tr>
          {player.cards.map((card, i) => {
            return <Card key={i} number={card.number} suit={card.suit} />
          })}
        </tr>
      </table>
      <p>{message}</p>
    </div>
  );
}

export default Player;