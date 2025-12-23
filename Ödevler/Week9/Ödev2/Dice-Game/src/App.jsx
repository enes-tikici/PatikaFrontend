import { useState, useEffect } from 'react'
import './App.css'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'
import Dice from './components/Dice/Dice'
import Result from './components/Result/Result'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  const dice = [dice1, dice2, dice3, dice4, dice5, dice6]

  const initialDice1 = Math.floor(Math.random() * dice.length)
  const initialDice2 = Math.floor(Math.random() * dice.length)

  const [players, setPlayers] = useState({ player1: "Player1", player2: "Player2" })
  const [dices, setDices] = useState({ player1: initialDice1, player2: initialDice2 })
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (dices.player1 > dices.player2) {
      setWinner(players.player1);
    } else if (dices.player2 > dices.player1) {
      setWinner(players.player2);
    } else {
      setWinner("Berabere");
    }
  }, []);

  const mixDice = () => {

    let interval = setInterval(() => {
      const newDice1 = Math.floor(Math.random() * dice.length);
      const newDice2 = Math.floor(Math.random() * dice.length);
      setDices({ player1: newDice1, player2: newDice2 });
    }, 100);

    setTimeout(() => {
      clearInterval(interval)

      const final1 = Math.floor(Math.random() * dice.length);
      const final2 = Math.floor(Math.random() * dice.length);

      setDices({ player1: final1, player2: final2 });

      if (final1 > final2) {
        setWinner(players.player1);
      } else if (final2 > final1) {
        setWinner(players.player2);
      } else {
        setWinner("Berabere");
      }
    }, 3000)
  }

  return (
    <div id='container'>
      <Result winner={winner} />
      <div id='dice-section'>
        <Dice source={dice[dices.player1]} name={players.player1} changable={true} players={players} setPlayers={setPlayers} />
        <Dice source={dice[dices.player2]} name={players.player2} changable={false} />
      </div>
      <button style={{ color: "white" }} id='button' onClick={mixDice}><i className="bi bi-shuffle"></i></button>
    </div>
  )
}

export default App