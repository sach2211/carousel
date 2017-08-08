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
          <img src='http://assets.myntassets.com/v1/a64vl2cbedwj0d1zajey.jpg' width="300"/>
          <img src='http://assets.myntassets.com/v1/zxahracz8b47r50xagim.jpg' width="300"/>
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
