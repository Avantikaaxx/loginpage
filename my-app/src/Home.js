import React , { Component } from "react";
import fire from "./config/fire";
import companyLogo from "./two.jpg";
class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
           <h1>You are logged in !!!</h1>
           <img src={companyLogo} alt="Logo" />
            <button onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Home;