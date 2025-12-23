import './Dice.css'

const Dice = ({ source, name, changable, players, setPlayers }) => {

    let content = <div id='dice-container'>
        <h2>{name}</h2>
        <img src={source} />
    </div>

    if (changable) {
        content = <div id='dice-container'>
            <input id='name-input' type='text' value={name} onChange={(e) => setPlayers({ ...players, player1: e.target.value })}></input>
            <img src={source} />
        </div>
    }

    return (<div>
        {content}
    </div>)
}

export default Dice