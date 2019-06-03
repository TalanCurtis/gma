import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentHP } from '../../redux/reducers/players/playersActions';

const Counter = (props) => {

  console.log("counter", props)

  const handleAdd = () => {
    console.log("add");
    updateCurrentHP(props.player, "add");
  }
  const handleSub = () => {
    console.log("sub");
    updateCurrentHP(props.player, "sub");
  }

  return(
    <div className="Counter" style={{display:"Flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{height:"25px", width:"25px", backgroundColor:"green", display:"Flex", justifyContent:"center", alignItems:"center"}} onClick={handleAdd}>+</div>
      <div style={{width:"30px", display:"Flex", justifyContent:"center", alignItems:"center"}}>{props.value}</div>
      <div style={{height:"25px", width:"25px", backgroundColor:"red", display:"Flex", justifyContent:"center", alignItems:"center"}}onClick={handleSub}>-</div>
    </div>
  )
}

Counter.defaultProps = {
  value: 10,
  add: ()=>{console.log("add")},
  sub: ()=>{console.log("sub")},
}

export default connect(null, {updateCurrentHP})(Counter);