import React from "react";
import "../../Styles/general.css";

export default class Button extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {};  
    }
    
    setValue(e){

        this.setState({parameter: e.target.value});
        this.props.onChangeParameter(e.target.value); // send to parent
      
    }
    

    render(){
        return(
            <div className="w-full">
                <button className="btn-default">{this.props.label}</button>
            </div>
        )
    }

}