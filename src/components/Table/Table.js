import React, { Component } from 'react';
// import colors from "../../styles/main.css"
import DiceToRole from '../DiceToRole/DiceToRole';
import _ from "lodash";


class Table extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  static defaultProps = {
    // data is all the data required to make a table
    data: {
      "header": {
        "title": "title",
        "subTitle": "sub",
        "value": 0
      },
      "columns":{
        "note": "*",
        "item": "Item",
        "modifier": "Mod" 
      },
      "items": [
        {
          "id": 0,
          "name": "test name",
          "isMagical": true,
          "modifier": 99,
          "notes": [
            "this is a test item",
          ],
          "bonuses": [
            "good area to put objects the effect attributes like str + 2 while wearing armor"
          ],
          "isEquipped": true
        },
      ]
    }
  }

  header = () => {
    const { title , subTitle, value } = this.props.data.header;
    const subTitleDiv = () => {
      return (
        <div className="subTitle h6" style={{display:"flex", justifyContent:"center", alignItems:"center", justifySelf: "flex-end"}}>
          <div>
            {subTitle}:
          </div>
          <div>
            {value}
          </div>
        </div>
      )
    }
    return ( 
      <div className="header" style={{display:"grid", gridTemplateColumns:`repeat(${2}, 1fr)`, backgroundColor:"yellow", padding:"4px"}}>
        <div className="title h5" style={{justifySelf: "flex-start", alignSelf:"center"}}>
          {title}
        </div>
        {subTitle? subTitleDiv(): null}
      </div>
    );
  }

  columnHeader = () => {
    const { item , modifier, note , dice, equipped} = this.props.data.columns;
    return (
        <div className="columnHeaders" style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr 1fr`, backgroundColor:"orange", padding:"4px"}}>
          {note? <div style={{justifySelf:"center", alignSelf:"center"}}> { note } </div> : null }
          {item? <div style={{justifySelf:"center", alignSelf:"center"}}> { item } </div> : null }
          {modifier? <div style={{justifySelf:"center", alignSelf:"center"}}> { modifier } </div> : null }
          {dice? <div style={{justifySelf:"center", alignSelf:"center"}}> { dice } </div> : null }
          {equipped? <div style={{justifySelf:"center", alignSelf:"center"}}> { equipped } </div> : null }
        </div>
    );
  }

  items = () => {
    let items = _.map(this.props.data.items, (x,i)=>{
      let note = " ";
      if ( x.notes.length ){
        note = "+";
      }
      if ( x.isMagical ){
        note = "*"
      }
      const { equipped } = this.props.data.columns;

      return (
        <div  key={i} style={{display:"grid", gridTemplateColumns:`1fr 10fr 3fr 1fr`, padding:"4px", backgroundColor:"pink"}}>
          {note? <div style={{justifySelf:"center", alignSelf:"center"}}> { note } </div> : null }
          {x.name? <div style={{justifySelf:"flex-start", alignSelf:"center"}}> { x.name } </div> : null }
          {x.modifier? <div style={{justifySelf:"flex-end", alignSelf:"center"}}> { x.modifier } </div> : null }
          {x.dice? <div style={{justifySelf:"center", alignSelf:"center"}}><DiceToRole dice={x.dice}/></div> : null }
          {equipped? <div style={{justifySelf:"center", alignSelf:"center"}}><input type="checkbox" name="equipt" id={"x.name+id"}/></div> : null }
        </div>
      );
    });
    return (
      <div className="items" style={{display:"grid"}}>
        { items }
      </div>
    );
  }

  render(){
    console.log(this.props)
    return(
      <div className="Table" style={{display:"grid", gridTemplateRows:"30px 20px auto"}}>
        {this.header()}
        {this.columnHeader()}
        {this.items()}
      </div>
    )
  }
}


export default Table;


