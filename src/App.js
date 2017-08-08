import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> Carousel Component </h2>
        </div>
        <Carousel>
          <img src='http://lorempixel.com/300/200'/>
          <img src='http://lorempixel.com/301/200'/>
          <img src='http://lorempixel.com/302/200'/>
        </Carousel>
      </div>
    );
  }
}

export default App;

const Carousel = (props) => {
  return(
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {props.children}
      </div>
    </div>
  )
}
