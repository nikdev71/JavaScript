import React from 'react'

function Bet ({inputValue, placeBet, inputChange, handleKeyDown})  {
  return (
    <div className="bet">
      <h2>Place Bet</h2>
      <form>
        <input type="text" name="bet"  value={inputValue} onChange={inputChange} onKeyDown={handleKeyDown}/>
      </form>
      <button onClick={placeBet}>Place Bet</button>
    </div>
  );
}

export default Bet