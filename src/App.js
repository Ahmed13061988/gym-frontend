
import './App.css';
import ReactDom from "react-dom"
import GymCards from './containers/GymCards'
import React, { Component } from 'react';
import { connect } from "react-redux";
import { setGyms } from './redux/actionsCreators';

class App extends Component {

  componentDidMount(){
    this.props.setGyms()
  }
  render(){
  return (
    <>
   
    <div className="App">
    <h1>Find your workout place</h1>
    < GymCards />
    </div>
    </>
  );}
}

export default connect(null, {setGyms})(App);
