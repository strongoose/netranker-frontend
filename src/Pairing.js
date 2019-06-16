import React from 'react';

function Card(props) {
  return <input
    type='image'
    alt={props.name}
    src={props.src}>
  </input>
}

function Pairing(props) {
  return <div>
    <Card
      name='Parasite'
      src='https://netrunnerdb.com/card_image/01012.png'
    />
    <Card
      name='Temüjin Contract'
      src='http://www.cardgamedb.com/forums/uploads/an/med_ADN37_26.png'
    />
   </div>
}

export default Pairing;
