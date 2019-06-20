import React from 'react';

function Card(props) {
  return <img
    alt={props.name}
    src={props.src}>
  </img>
}

function Pairing(props) {
  return <div className="container">
    <div className="d-flex mt-5 align-items-center justify-content-center">
      <h1>Pick the best of</h1>
    </div>
    <div className="d-flex mt-5 align-items-center justify-content-center">
      <Card
        name='Parasite'
        // src='https://netrunnerdb.com/card_image/01012.png'
        src='http://localhost:8000/01012.png'
      />
    <div className="m-5"><h2>vs</h2></div>
      <Card
        name='Temüjin Contract'
        // src='http://www.cardgamedb.com/forums/uploads/an/med_ADN37_26.png'
        src='http://localhost:8000/11026.png'
      />
    </div>
  </div>
}

export default Pairing;
