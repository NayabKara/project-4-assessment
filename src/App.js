import React, { Component } from 'react';
import './App.css';
import CircleSelector from "./components/CircleSelector/CircleSelector"
import Circles from "./components/Circles/Circles"

export default class App extends React.Component {
  state = {
    click: true,
    status: 'selected'

  }

  circle1Clicked = () => {
    let newCircle1 = this.state.click
    let newStatus = 'circle 1 is selected'
    this.setState({status: newStatus})
  }

  circle2= () => {
    let newCircle2= this.state.click
    let newStatus = 'circle 2 is selected'
    this.setState({status: newStatus})
  }

  circle3= () => {
    let newCircle3= this.state.click
    let newStatus = 'circle 3 is selected'
    this.setState({status: newStatus})
  }

  circle4= () => {
    let newCircle4= this.state.click
    let newStatus = 'circle 4 is selected'
    this.setState({status: newStatus})
  }




  render() {

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          click={this.state.click} />
          <Circles />

        </main>
      </div>
    );
  }
}

