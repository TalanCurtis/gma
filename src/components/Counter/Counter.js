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
      startValue: 0,
      difference: 0,
      pipColor:"green"
    }
  }

  // TODO: figure out the best way to show the correct pip when input using steps or typing in a value.
  showPIP = debounce((value, operation)=>{
    console.log("pip", {value, props:this.props.value})
    let tl = new TimelineLite();
    let top = 30;
    let difference;
    let pipColor = "green";
    if ( operation === "add" ){
      // Adding
      difference = this.state.startValue - 1 - value
      difference = difference * -1;
      pipColor = "green";
      top = -10;
    } else if ( operation === "sub" ){
      // Subtracting
      difference = this.state.startValue - value + 1
      difference = difference * -1;
      pipColor = "red";
      top = 10;
    }
    tl.to(`.pip${this.props.player.id}`, 0.5, {top:top, opacity:1});
    tl.to(`.pip${this.props.player.id}`, 0.5, {opacity:1});
    tl.to(`.pip${this.props.player.id}`, 0.5, {opacity:0})
    tl.set(`.pip${this.props.player.id}`, {top:0, opacity:0});

    this.setState({bouncing:false, difference: difference, pipColor});
  }, 1000)

   handleOnChange = (e) => {
    let value = e.target.value;
    console.log("change", {value, props:this.props.value})
    let operation;
    if (!this.state.bouncing){
         this.setState({bouncing:true, startValue:e.target.value});
    }
    
    if ( value >= this.props.value){
      operation = "add"

    } else if ( value < this.props.value){
      operation = "sub"
    }  
    this.showPIP(value, operation);
    this.props.updateCurrentHP(this.props.player, value);
  }
  // TODO: pip should show value difference not value

  render(){
    return(
      <div className="Counter" style={{display:"Flex", justifyContent:"center", alignItems:"center", position:"relative"}}>
        <div className={`pip${this.props.player.id} h5`} style={{position:"absolute", top:"0px", left:"20px", pointerEvents:"none", opacity:0, color:this.state.pipColor,  textShadow: "1px 1px black"}}>
          {this.state.difference}
        </div>
        <input type="number" style={{width:"50px", textAlign: "right", marginRight:"4px"}} onChange={this.handleOnChange} value={this.props.value}/>
      </div>
    )
  }
}

Counter.defaultProps = {
  value: 10,
}

export default connect(null, {updateCurrentHP})(Counter);