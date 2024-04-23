import React from 'react'

function Bet ({inputValue, placeBet, inputChange, handleKeyDown})  {
  return (
    <div className="bet">
      <h2>Place Bet</h2>
      <form>
        <input type="text" name="bet" placeholder="" value={inputValue} onChange={inputChange} onKeyDown={handleKeyDown}/>
      </form>
      <button onClick={placeBet}>Place Bet</button>w
    </div>
  );
}

export default Bet