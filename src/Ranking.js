import React from 'react';

let ranking = [
  {score: 100, card: 'Corporate Troubleshooter'},
  {score: 75, card: 'Noise: Hacker Extroadinaire'},
  {score: 1, card: 'Net Police'},
]

function TableOfRanks(props) {
  return <table class='table'>
    <tr>
      <th>Score</th>
      <th>Card</th>
    </tr>
    {ranking.map((row) => {
      return <CardRow score={row.score} card={row.card}/>
    })}
  </table>
}

function CardRow(props) {
  return <tr>
    <td>{props.score}</td>
    <td>{props.card}</td>
  </tr>
}

function Ranking(props) {
  return <div className='container'>
    <div className="d-flex mt-5 align-items-center justify-content-center">
      <h1>Ranking</h1>
    </div>
    <TableOfRanks ranking={ranking}/>
  </div>
}

export default Ranking;
