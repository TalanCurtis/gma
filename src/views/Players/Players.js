import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

class Players extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    let players = _.map(this.props.players, (x,i)=>{
      return (
        <div key={i} style={{margin:"5px"}}>
          <PlayerCard content={x}/>
        </div>
      )
    })
    return(
      <div className="Players">
        {players}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    players: state.players
  } ;
} 

export default connect(mapStateToProps)(Players);