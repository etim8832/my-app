import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './login.css'

class Login extends Component {
constructor(){
  super();
  this.state = {
    userName : "",
    password : ""
  }

}

handleUsername = (e) =>{
  this.setState({userName:e.target.value});
}

handlePassword = (e) =>{
  this.setState({password:e.target.value});
}

handleSubmit = (e) =>{
  let {userName,password} = this.state;
  console.log("show username",userName); 
  this.statehandleOnlogin();
  e.preventDefault();
}

 handleOnlogin(){
   fetch("https://api.myjson.com/bins/d327w")
   .then((res) => {
     console.log("sow res",res);
   })
 }


  render() {
    return (
      <div className="login shadow p-3 mb-5 bg-white rounded">
          <img src={logo} className="logo" alt="logo" />
          <form className="col-md-12" onSubmit={ this.handleSubmit}>
         
          <br />
          <label>
            E-mail address
            </label>
            <input
              type="text"
              className="form-control border_redius"
              placeholder="your email..."
              value={this.state.userName}
              onChange={this.handleUsername}
               />
               <label>
               Password 
               </label>
               <input
                 type="text"
                 className="form-control border_redius"
                 placeholder="your password..."
                 value={this.state.password}
                 onChange={this.handlePassword}
                  />
                  <div class="col text-center mt-3">
                  <button class="btn btn-primary btn-lg w-50">SING IN</button>
                </div>

                <div className="row col pt-3">
                <p className="text-info " style={{float:'left'}}>  Forgot Password ? </p>
                <p className="text-info  " style={{float:'right'}}>Create a new accounst </p>
           </div>

        </form>
      </div>

    );
  }
}

export default Login;