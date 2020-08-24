import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DisplayShoes from './DisplayShoes';
import AddShoes from './AddShoes';
import DeleteShoes from './DeleteShoes';
import UpdateShoes from './UpdateShoes';
import Login from './Login';
import {connect} from 'react-redux';


function TopComponent(props){
  console.log(props.loggedIn);
  if(props.loggedIn){
    return(
      <BrowserRouter>
      <React.Fragment>
          
          <div className="row navbarRow">
          <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shoes">Show Shoes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add Shoe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/delete">Delete Shoe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update">Update Shoe</Link>
                </li>
              </ul>
            </div>
              </nav>
          </div> 
          <Switch>
          <Route exact path="/" component={Login}></Route>
              <Route exact path="/shoes" component={DisplayShoes}></Route>
              <Route exact path="/add" component={AddShoes}></Route>
              <Route exact path="/delete" component={DeleteShoes}></Route>
              <Route exact path="/update" component={UpdateShoes}></Route>
          </Switch>
          
          
      </React.Fragment>
      </BrowserRouter>
  );
  } else {
    return(
      <BrowserRouter>
      <React.Fragment>
          
          <div className="row navbarRow">
          <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/shoes">Show Shoes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/add">Add Shoe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/delete">Delete Shoe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/update">Update Shoe</Link>
                </li>
              </ul>
            </div>
              </nav>
          </div> 
          <Switch>
          <Route exact path="/" component={Login}></Route>
              <Route exact path="/shoes" component={DisplayShoes}></Route>
              <Route exact path="/add" component={AddShoes}></Route>
              <Route exact path="/delete" component={DeleteShoes}></Route>
              <Route exact path="/update" component={UpdateShoes}></Route>
          </Switch>
          
          
      </React.Fragment>
      </BrowserRouter>
      );
  }
    
}

const mapStateToProps = (state) => {
  return{
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(TopComponent);