import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentHP } from '../../redux/reducers/players/playersActions';
import { debounce } from 'lodash';
import { TimelineLite } from 'gsap';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      bouncing: false,
    }
  }

  showPIP = debounce((value)=>{
    let tl = new TimelineLite();
    tl.to(".pip", 0.5, {top:-10, opacity:1});
    tl.to(".pip", 0.5, {opacity:0});
    tl.set(".pip", {top:0, opacity:0});
    console.log("hellp", value - this.props.value);
  }, 1000)

   handleOnChange = (e) => {
    this.showPIP(e.target.value);
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
        <div className="pip h5" style={{position:"relative", top:"0px", right:"40px", pointerEvents:"none", opacity:0, color:"green"}}>
          {this.props.value}
        </div>
      </div>
    )
  }
}

Counter.defaultProps = {
  value: 10,
}

export default connect(null, {updateCurrentHP})(Counter);