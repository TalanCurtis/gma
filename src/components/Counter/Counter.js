import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentHP } from '../../redux/reducers/players/playersActions';

const Counter = (props) => {

  const handleOnChange = (e) => {
    if ( e.target.value > props.value){
      props.updateCurrentHP(props.player, "add");
    } else if ( e.target.value < props.value){
      props.updateCurrentHP(props.player, "sub");
    }
  }

  return(
    <div className="Counter" style={{display:"Flex", justifyContent:"center", alignItems:"center"}}>
      <input type="number" style={{width:"50px", textAlign: "right"}} onChange={handleOnChange} value={props.value}/>
    </div>
  )
}

Counter.defaultProps = {
  value: 10,
}

export default connect(null, {updateCurrentHP})(Counter);