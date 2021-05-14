import React , { Component } from "react";
import fire from "./config/fire";
import companyLogo from "./one.png";

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : "",
        valid : "NOT"
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u);
    }).catch((err)=>{
        console.log(err);
        this.setState({valid : null})
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

render()
{
    if (this.state.valid){
    return(
        <div>
            <form>
            <img src={companyLogo} alt="Logo" />
            <h1> </h1>
            <h1> </h1>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="Password"
                value={this.state.password}
                />
            <h1> </h1>
            <h1> </h1>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>
            </form>

        </div>
    )}
    else{
        return (
            <div >
            <h1>Invalid Credentials, try again.</h1>
          </div>
        )
    }
}
}
export default Login;