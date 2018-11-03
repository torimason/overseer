import React, {Component} from 'react';
import API from "../../api/auth";

export default class LoginForm extends Component {
    state = {
        username:"",
        password:""
    }
    handleLogin = (event) => {
        event.preventDefault();
        console.log("Log In", this.state);
        API.login(this.state).then(function(response){
            console.log(response);
        });
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <form style={{marginTop: "40px", marginBottom: "40px", marginLeft: "30px" , marginRight: "30px"}}>
            <div className="form-group">
              <label style={{color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}}>Username</label>
              <input name="username" onChange={this.captureInput} type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
              <label style={{color: "white", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}}>Password</label>
              <input name="password" onChange={this.captureInput} type="password" className="form-control" id="passwordInput"/>
            </div>
            <button onClick={this.handleLogin} style={{color: "#303440ff", backgroundColor: "#d9d9d9ff", color: "#303440ff", fontFamily: "'Exo 2', sans-serif", fontSize: "20px"}} className="btn">Login</button>
          </form>
        )
    }
}