import React, { PureComponent } from 'react'
import '../App.css';


class Game extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
          deck: [],
          dealer: null,
          player: null,
          wallet: 0,
          inputValue: '',
          currentBet: null,
          gameOver: false,
          message: null
        };
      }

      generateDeck() {
        const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        const suits = ['♦','♣','♥','♠'];
        const deck = [];
        for (let i = 0; i < cards.length; i++) {
          for (let j = 0; j < suits.length; j++) {
            deck.push({number: cards[i], suit: suits[j]});
          }
        }
        return deck;
      }
      
      dealCards(deck) {
        const playerCard1 = this.getRandomCard(deck);
        const dealerCard1 = this.getRandomCard(playerCard1.updatedDeck);
        const playerCard2 = this.getRandomCard(dealerCard1.updatedDeck);    
        const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
        const dealerStartingHand = [dealerCard1.randomCard, {}];
        
        const player = {
          cards: playerStartingHand,
          count: this.getCount(playerStartingHand)
        };
        const dealer = {
          cards: dealerStartingHand,
          count: this.getCount(dealerStartingHand)
        };
        
        return {updatedDeck: playerCard2.updatedDeck, player, dealer};
      }
    
      startNewGame(type) {
        if (type === 'continue') {
          if (this.state.wallet > 0) {
            const deck = (this.state.deck.length < 10) ? this.generateDeck() : this.state.deck;
            const { updatedDeck, player, dealer } = this.dealCards(deck);
    
            this.setState({
              deck: updatedDeck,
              dealer,
              player,
              currentBet: null,
              gameOver: false,
              message: null
            });
          } else {
            this.setState({ message: 'Game over! You are broke! Please start a new game.' });
          }
        } else {
          const deck = this.generateDeck();
          const { updatedDeck, player, dealer } = this.dealCards(deck);
    
          this.setState({
            deck: updatedDeck,
            dealer,
            player,
            wallet: 100,
            inputValue: '',
            currentBet: null,
            gameOver: false,
            message: null
          });
        }
      }
           
      getRandomCard(deck) {
        const updatedDeck = deck;
        const randomIndex = Math.floor(Math.random() * updatedDeck.length);
        const randomCard = updatedDeck[randomIndex];
        updatedDeck.splice(randomIndex, 1);
        return { randomCard, updatedDeck };
      }
      
      placeBet() {
        const currentBet = this.state.inputValue;
    
        if (currentBet > this.state.wallet) {
          this.setState({ message: 'Insufficient funds to bet that amount.' });
        } else if (currentBet % 1 !== 0) {
          this.setState({ message: 'Please bet whole numbers only.' });
        } else {
          // Deduct current bet from wallet
          const wallet = this.state.wallet - currentBet;
          this.setState({ wallet, inputValue: '', currentBet });
        }
      }
      
      hit() {
        if (!this.state.gameOver) {
          if (this.state.currentBet) {
            const { randomCard, updatedDeck } = this.getRandomCard(this.state.deck);
            const player = { ...this.state.player };
            player.cards.push(randomCard);
            player.count = this.getCount(player.cards);
    
            if (player.count > 21) {
              this.setState({ player, gameOver: true, message: 'BUST!' });
            } else {
              this.setState({ deck: updatedDeck, player });
            }
          } else {
            this.setState({ message: 'Please place bet.' });
          }
        } else {
          this.setState({ message: 'Game over! Please start a new game.' });
        }
      }
      
      dealerDraw(dealer, deck) {
        const { randomCard, updatedDeck } = this.getRandomCard(deck);
        dealer.cards.push(randomCard);
        dealer.count = this.getCount(dealer.cards);
        return { dealer, updatedDeck };
      }
      
      getCount(cards) {
        const rearranged = [];
        cards.forEach(card => {
          if (card.number === 'A') {
            rearranged.push(card);
          } else if (card.number) {
            rearranged.unshift(card);
          }
          
          
          // (card.number === 'A') ? rearranged.push(card) : rearranged.unshift(card);
        });
        
        return rearranged.reduce((total, card) => {
          if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
            return total + 10;
          } else if (card.number === 'A') {
            return (total + 11 <= 21) ? total + 11 : total + 1;
          } else {
            return total + card.number;
          }
        }, 0);
      }
      
      stand() {
        if (!this.state.gameOver) {
          // Show dealer's 2nd card
          const randomCard = this.getRandomCard(this.state.deck);
          let deck = randomCard.updatedDeck;
          let dealer = this.state.dealer;
          dealer.cards.pop();
          dealer.cards.push(randomCard.randomCard);
          dealer.count = this.getCount(dealer.cards);
    
          // Keep drawing cards until count is 17 or more
          while(dealer.count < 17) {
            const draw = this.dealerDraw(dealer, deck);
            dealer = draw.dealer;
            deck = draw.updatedDeck;
          }
    
          if (dealer.count > 21) {
            this.setState({
              deck,
              dealer,
              wallet: this.state.wallet + this.state.currentBet * 2,
              gameOver: true,
              message: 'Dealer bust! You win!'
            });
          } else {
            const winner = this.getWinner(dealer, this.state.player);
            let wallet = this.state.wallet;
            let message;
            
            if (winner === 'dealer') {
              message = 'Dealer wins...';
            } else if (winner === 'player') {
              wallet += this.state.currentBet * 2;
              message = 'You win!';
            } else {
              wallet += this.state.currentBet;
              message = 'Push.';
            }
            
            this.setState({
              deck, 
              dealer,
              wallet,
              gameOver: true,
              message
            });
          } 
        } else {
          this.setState({ message: 'Game over! Please start a new game.' });
        }
      }
      
      getWinner(dealer, player) {
        if (dealer.count > player.count) {
          return 'dealer';
        } else if (dealer.count < player.count) {
          return 'player';
        } else {
          return 'push';
        }
      }
      
      inputChange(e) {
        const inputValue = +e.target.value;
        this.setState({inputValue});
      }
      
      handleKeyDown(e) {
        const enter = 13;
        console.log(e.keyCode);
        
        if (e.keyCode === enter) {
          this.placeBet();
        }
      }
      
      componentWillMount() {
        this.startNewGame();
        const body = document.querySelector('body');
        body.addEventListener('keydown', this.handleKeyDown.bind(this));
      }
      
      render() {
        let dealerCount;
        const card1 = this.state.dealer.cards[0].number;
        const card2 = this.state.dealer.cards[1].number;
        if (card2) {
          dealerCount = this.state.dealer.count;
        } else {
          if (card1 === 'J' || card1 === 'Q' || card1 === 'K') {
            dealerCount = 10;
          } else if (card1 === 'A') {
            dealerCount = 11;
          } else {
            //надо вернуть если надо чтоб код работал
            // eslint-disable-next-line no-unused-vars
            dealerCount = card1;
          }
        }
    
        return (
          <div>
            <div className="buttons">
              <button onClick={() => {this.startNewGame()}}>New Game</button>
              <button onClick={() => {this.hit()}}>Hit</button>
              <button onClick={() => {this.stand()}}>Stand</button>
            </div>
            
            <p>Wallet: ${ this.state.wallet }</p>
            {
              !this.state.currentBet ? 
              <div className="input-bet">            
                <form>
                  <input type="text" name="bet" placeholder="" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                </form>
                <button onClick={() => {this.placeBet()}}>Place Bet</button>
              </div>
              : null
            }
            {
              this.state.gameOver ?
              <div className="buttons">
                <button onClick={() => {this.startNewGame('continue')}}>Continue</button>
              </div>
              : null
            }
            <p>Your Hand ({ this.state.player.count })</p>
            <table className="cards">
              <tr>
                { this.state.player.cards.map((card, i) => {
                  return <Card key={i} number={card.number} suit={card.suit}/>
                }) }
              </tr>
            </table>
            
            <p>Dealer's Hand ({ this.state.dealer.count })</p>
            <table className="cards">
              <tr>
                { this.state.dealer.cards.map((card, i) => {
                  return <Card key={i} number={card.number} suit={card.suit}/>;
                }) }
              </tr>
            </table>
            
            <p>{ this.state.message }</p>
          </div>
        );
      }
    };
    
    const Card = ({ number, suit }) => {
      const combo = (number) ? `${number}${suit}` : null;
      const color = (suit === '♦' || suit === '♥') ? 'card-red' : 'card';
      
      return (
        <td>
          <div className={color}>
            { combo }
          </div>
        </td>
      );
 };

export default Game