import React, { Component } from 'react';
import './App.css';
import CircleSelector from "./components/CircleSelector/CircleSelector"
import Circles from "./components/Circles/Circles"

export default class App extends React.Component {
  state = {
    selectCircle1: "selected",
    selectCircle2: "unselected",
    selectCircle3: "unselected",
    selectCircle4: "unselected",
    status: 'ready'

  }

  circle1Clicked = () => {
    let newCircle1 = this.state.selectCircle1
    let newStatus = 'circle 1 is selected'
    this.setState({selectCircle1: newCircle1, status: newStatus})
  }

  circle2Clicked = () => {
    let newCircle2 = this.state.selectCircle2
    let newStatus = 'circle 2 is selected'
    this.setState({selectCircle2: newCircle2, status: newStatus})
  }

  circle3Clicked = () => {
    let newCircle3 = this.state.selectCircle3
    let newStatus = 'circle 3 is selected'
    this.setState({selectCircle3: newCircle3, status: newStatus})
  }

  circle4Clicked = () => {
    let newCircle4 = this.state.selectCircle4
    let newStatus = 'circle 4 is selected'
    this.setState({selectCircle4: newCircle4, status: newStatus})
  }




  render() {

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector click={this.circle1Clicked}  />
          <Circles />

        </main>
      </div>
    );
  }
}

