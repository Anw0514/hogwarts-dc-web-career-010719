import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import HogDetails from './HogDetails'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      hogDetails: null
    }
  }

  handleHogClick = (hog) => {
    this.setState({hogDetails: hog})
  }

  render() {
    return (
      <div className="App">
          < Nav hogClick={this.handleHogClick}/>
          {
            this.state.hogDetails ? <HogDetails data={this.state.hogDetails} /> : < HogsContainer hogs={this.state.hogs} onHogClick={this.handleHogClick}/>
          }
      </div>
    )
  }
}

export default App;
