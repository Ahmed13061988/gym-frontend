
import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { setGyms } from './redux/actionsCreators';
import GymPage from './components/GymPage'
import GymCards from './containers/GymCards'
import {Switch, Route} from "react-router-dom";


class App extends Component {

  componentDidMount(){
    this.props.setGyms()
  }
  render(){
  return (
    <>
   
    <div className="App">
    <h1>Find your workout place</h1>
    <Switch>
      <Route path="/gyms/:id" component={GymPage}/>
      <Route path="/gyms" component={GymCards}/>
    </Switch>
    
    </div>
    </>
  );}
}

export default connect(null, {setGyms})(App);
