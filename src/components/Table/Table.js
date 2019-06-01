import React, { Component } from 'react';
// import colors from "../../styles/main.css"
import ReactTable from 'react-table';
import _ from "lodash";


class Table extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    const { data, columns } = this.props.data;
    // have to rename key in data with a capital H or react-table doesn't read it.
    console.log(this.props)
    let renderColumns =  _.map(columns, (x ,i)=>{
      return(
      <div key={i} className="columns">
        {x.id}
      </div>
      )
    });
    let renderData =  _.map(data, (x ,i)=>{
      return(
      <div key={i} className="row">
        {x.items.name}
      </div>
      )
    });

    return(
      <div className="Table" style={{display:"grid"}}>
        <div className="Header" style={{display:"grid", gridTemplateColumns:`repeat(${2}, 1fr)`, backgroundColor:"yellow"}}>
          <div className="title h5" style={{justifySelf: "flex-start", alignSelf:"center", marginLeft:"10px"}}>
          {"Outfit"}
          </div>
          <div className="subTitle h6" style={{display:"flex", justifyContent:"center", alignItems:"center", justifySelf: "flex-end", marginRight:"10px"}}>
            <div>
            {"AC"}:
            </div>
            <div>
            {"13"}
            </div>
          </div>
        </div>
        <div className="columnHeaders" style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`, backgroundColor:"orange"}}>
          <div> * </div>
          <div> Item </div>
          <div> Mod</div>
        </div>
        <div className="items" style={{display:"grid"}}>
          <div style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`}}>
            <div> * </div>
            <div> Black Chain mail</div>
            <div> +8 </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`}}>
            <div> {" "}  </div>
            <div> Black Horned helmet</div>
            <div> +3 </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:`1fr 10fr 2fr`}}>
            <div> {" "} </div>
            <div> Black Large Shield</div>
            <div> +4 </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Table;


