import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentHP } from '../../redux/reducers/players/playersActions';
import { debounce } from 'lodash';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      bouncing: false
    }
  }

  showPIP = debounce(()=>{console.log("hellp")}, 2000)

   handleOnChange = (e) => {
    this.showPIP();
    if ( e.target.value > this.props.value){
      this.props.updateCurrentHP(this.props.player, "add");
    } else if ( e.target.value < this.props.value){
      this.props.updateCurrentHP(this.props.player, "sub");
    }
  }

  render(){
    return(
      <div className="Counter" style={{display:"Flex", justifyContent:"center", alignItems:"center"}}>
        <input type="number" style={{width:"50px", textAlign: "right"}} onChange={this.handleOnChange} value={this.props.value}/>
      </div>
    )
  }
}

Counter.defaultProps = {
  value: 10,
}

export default connect(null, {updateCurrentHP})(Counter);