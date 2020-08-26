import React, { useState } from 'react';
import {connect} from 'react-redux';


function Login(props){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(true);
    }
    if(props.loggedIn){
        return(
            <React.Fragment>
                <br/><br/>
                <div className="container">
                    <div className="row loginForm">
                        hi
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return(
    <React.Fragment>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="container login">
            <div className="row">
                <div className="col-sm-4"/>
                <div className="col-sm-4 loginForm">
                    <h3 style={{'textAlign': "center"}}>Welcome to MyShoe App</h3>
                <form id="login-form">
              <div className="form-group">
                <label className="login-username-label">
                  Username:
                  <input type="text" className="form-control" placeholder="username"
                    value={username} onChange={handleUsername}></input>
                </label>
              </div>
              <div className="form-group">
                <label className="login-password-label">
                  Password:
                  <input type="password" className="form-control" placeholder="password"
                    value={password} onChange={handlePassword}></input>
                </label>
              </div>
              {/* <AlertComponent message="Password and/or Username is incorrect" /> */}
              <div className="loginButtons">
                <button className="btn btn-primary" onClick={handleSubmit}
                  >Login</button>
                {/* <button className="btn btn-warning"
                  >Forgot Info?</button> */}
                <button className="btn btn-success"
                  >Register</button>
              </div>
            </form>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (loggedIn) =>
        dispatch({
            type: 'login', loggedIn: loggedIn
        })
    };
};

const mapStateToProps = (state) => {
    return{
        loggedIn: state.loggedIn,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);