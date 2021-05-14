import React , { Component } from "react";
import fire from "./config/fire";

class Error extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}

render()
{
    return(
        <div>
           <h1>You are not logged in !!!</h1>
            
        </div>
    )
}
}
export default Error;