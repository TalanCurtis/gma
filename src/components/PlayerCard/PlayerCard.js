import React, { Component } from 'react';
import Table from '../Table/Table';
import Counter from '../Counter/Counter';

class PlayerCard extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  // TODO:  add redux actions to pass in to counter to add and subract health.

  render(){
    const { playerName, character } = this.props.content;
    const { ammo, attributes, info, inventory, outfit, spells, wealth, weapons } = character
    return(
      <div className="PlayerCard">
        <div className="header" style={{display:"flex" , justifyContent:"space-between"}}>
          <div className="playerName h4">{playerName}</div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div> MaxHP: {info.maxHP} </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> Cur: <Counter value={info.currentHP} player={this.props.content}/> </div>
          </div>
        </div>
        <div className="body" >
          {/* TODO: make comps for each attribute section then put them in a grid. */}
          <div>
            <Table data={outfit} />
          </div>
          <div>
            <Table data={weapons} />
          </div>
        </div>
        <div className="footer">
          <button>Notes</button>
        </div>
      </div>
    )
  }
}

export default PlayerCard;