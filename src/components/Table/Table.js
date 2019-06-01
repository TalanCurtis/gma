import React, { Component } from 'react';
// import colors from "../../styles/main.css"
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
    return ( 
      <div className="header" style={{display:"grid", gridTemplateColumns:`repeat(${2}, 1fr)`, backgroundColor:"yellow", padding:"4px"}}>
        <div className="title h5" style={{justifySelf: "flex-start", alignSelf:"center"}}>
          {title}
          </div>
          <div className="subTitle h6" style={{display:"flex", justifyContent:"center", alignItems:"center", justifySelf: "flex-end"}}>
          <div>
            {subTitle}:
          </div>
          <div>
            {value}
          </div>
        </div>
      </div>
    );
  }

  columnHeader = () => {
    const { item , modifier, note } = this.props.data.columns;
    return (
        <div className="columnHeaders" style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`, backgroundColor:"orange", padding:"4px"}}>
          <div style={{justifySelf:"center", alignSelf:"center"}} > { note } </div>
          <div style={{justifySelf:"center", alignSelf:"center"}} > { item } </div>
          <div> { modifier } </div>
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

      return (
        <div  key={i} style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`, padding:"4px"}}>
          <div style={{justifySelf:"center", alignSelf:"center"}}> { note } </div>
          <div> { x.name }</div>
          <div style={{justifySelf:"flex-end"}}> { x.modifier } </div>
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
      <div className="Table" style={{display:"grid"}}>
        {this.header()}
        {this.columnHeader()}
        {this.items()}
      </div>
    )
  }
}


export default Table;


