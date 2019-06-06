import React, { Component } from 'react';
// import colors from "../../styles/main.css"
import DiceToRole from '../DiceToRole/DiceToRole';
import _ from "lodash";


class Table2 extends Component{
  constructor(props){
    super(props);
    this.state={
      gridTemplateColumns:""
    }
  }
  static defaultProps = {
    // data is all the data required to make a table2
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

  componentDidMount(){
    let gridTemplateColumns = "";
    _.forEach(this.props.data.columns, (x,i)=>{
      gridTemplateColumns = gridTemplateColumns + ` ${x.size}`
    });
    this.setState({gridTemplateColumns})
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

  columns = () => {
    let columns = _.map(this.props.data.columns, (x,i)=>{
      return(
        <div key={i} className={x.key} style={{justifySelf:"center", alignSelf:"center"}}>
          {x.title}
        </div>
      );
    });

    return (
        <div className="columns" style={{display:"grid", gridTemplateColumns:`${this.state.gridTemplateColumns}`, backgroundColor:"orange", padding:"4px"}}>
          {columns}
        </div>
    );
  }

  items = () => {
    // iterate over items grab keys from columns display their content dependent on type.
    let items = _.map(this.props.data.items, (item,i)=>{
      let columns = _.map(this.props.data.columns, (x)=>x.key)
      let row = _.map(columns, (x,i)=>{
        let value = _.pick(item, x)
        if( value ) {
          let style = {justifySelf:"flex-start", alignSelf:"center"}
          if (_.has(value, "notes")){
            let note;
            if ( value.notes.list.length ){note = "+";}
            if ( value.notes.isMagical ){note = "*";}
            return (
              <div key={i} style={style}>
               {note}
              </div>
            );
          } else if (_.has(value, "equipped")){
            // TODO: Check box  on change should update redux state.
            return (
              <div key={i} style={style}>
               <input type="checkbox" name="" id="" checked={value.equipped}/>
              </div>
            );
          } else {
            
            if( _.isNumber(item[x])){
              style={justifySelf:"flex-end", alignSelf:"center"}
            }
            return (
              <div key={i} style={style}>
               {item[x]}
              </div>
            );
          }
        }
      });


      return (
        <div  key={i} style={{display:"grid", gridTemplateColumns:`${this.state.gridTemplateColumns}`, padding:"4px", backgroundColor:"pink"}}>
          {row}
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
    return(
      <div className="Table2" style={{display:"grid", gridTemplateRows:"30px 20px auto"}}>
        {this.header()}
        {this.columns()}
        {this.items()}
      </div>
    )
  }
}


export default Table2;


