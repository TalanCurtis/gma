import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../../data.json';
import _ from 'lodash';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

class Players extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  test(){
    console.log(data)
  }

  render(){
    let players = _.map(data.players, (x,i)=>{
      return (
        <div key={i}>
          {/* {x.playerName} */}
          <PlayerCard content={x}/>
        </div>
      )
    })
    return(
      <div className="Players">
        {/* <button onClick={()=>this.test()}>data</button> */}
        {players}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state ;
} 

export default connect(mapStateToProps)(Players);