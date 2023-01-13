import React from "react";
import "./Styles/home.css";

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <div className="top-bar">
                    <div className="hello-text">
                        Hello username!!
                    </div>
                </div>
            </div>
        )
    }

}