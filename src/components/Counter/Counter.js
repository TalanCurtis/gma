import React from 'react';

const Counter = (props) => {

  return(
    <div className="Counter" style={{display:"Flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{height:"25px", width:"25px", backgroundColor:"green", display:"Flex", justifyContent:"center", alignItems:"center"}} onClick={props.add}>+</div>
      <div style={{display:"Flex", justifyContent:"center", alignItems:"center"}}>{props.value}</div>
      <div style={{height:"25px", width:"25px", backgroundColor:"red", display:"Flex", justifyContent:"center", alignItems:"center"}}onClick={props.sub}>-</div>
    </div>
  )
}

Counter.defaultProps = {
  value: 10,
  add: ()=>{console.log("add")},
  sub: ()=>{console.log("sub")},
}

export default Counter;