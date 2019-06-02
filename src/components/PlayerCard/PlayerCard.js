import React, { Component } from 'react';
import Table from '../Table/Table';

class PlayerCard extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    const { playerName, character } = this.props.content;
    const { ammo, attributes, info, inventory, outfit, spells, wealth, weapons } = character
    return(
      <div className="PlayerCard">
        <div className="header">
          <div className="playerName h4">{playerName}</div>
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