import React from "react";
import "../../Styles/general.css";

export default class Button extends React.Component{

    constructor(props)
    {
        super(props);
    }
    
    setValue(e){

        this.props.onClick(e.target.value); // send to parent
      
    }
    

    render(){
        return(
            <div className="w-full">
                <button className="btn-default" onClick={(e) => this.setValue(e)}>{this.props.label}</button>
            </div>
        )
    }

}