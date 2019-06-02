import React from 'react';

const DiceToRole = (props) => {
  return(
    <div className="DiceToRole">
      {props.dice.amount}d{props.dice.type}
    </div>
  )
}

DiceToRole.defaultProps = {
  dice:{
    type: 9,
    amount: 9
  }
}

export default DiceToRole;