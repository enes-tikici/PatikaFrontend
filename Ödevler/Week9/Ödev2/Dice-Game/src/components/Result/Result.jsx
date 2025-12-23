import './Result.css'

const Result = ({ winner }) => {

    let content = `${winner} won 💪​`;

    if (winner === "Berabere") {
        content = "Draw! 🤝";
    }
    return (
        <h1 id="result-title">{content}</h1>
    )
}

export default Result