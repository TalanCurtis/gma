import React, { Component } from 'react';

class PlayerCard extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <div className="PlayerCard">
        <div className="header">
          <div className="playerName">{this.props.content.playerName}</div>
        </div>
        <div className="body">
          {/* TODO: make comps for each attribute section then put them in a grid. */}
        </div>
        <div className="footer">
          <button>Notes</button>
        </div>
      </div>
    )
  }
}

export default PlayerCard;