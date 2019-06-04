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
      difference: 0,
      pipColor:"green",
      oldValue: this.props.value
    }
  }

  showPIP = debounce((value)=>{
    let tl = new TimelineLite();
    let top = 30;
    let pipColor = "pink";
    const { oldValue } = this.state;
    let difference = value - oldValue;
    if ( oldValue <= value ){
      // Adding
      pipColor = "green";
      top = -10;
    } else if ( oldValue > value ){
      pipColor = "red";
      top = 10;
    }

    // Animation
    tl.to(`.pip${this.props.player.id}`, 0.5, {top:top, opacity:1});
    tl.to(`.pip${this.props.player.id}`, 0.5, {opacity:1});
    tl.to(`.pip${this.props.player.id}`, 0.5, {opacity:0})
    tl.set(`.pip${this.props.player.id}`, {top:0, opacity:0});

    this.setState({bouncing:false, difference: difference, pipColor, oldValue:value});
  }, 1000)

   handleOnChange = (e) => {
    let value = e.target.value * 1;
    if (!this.state.bouncing){
         this.setState({bouncing:true});
    }
    this.showPIP(value);
    this.props.updateCurrentHP(this.props.player, value);
  }

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