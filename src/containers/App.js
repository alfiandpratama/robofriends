import React, { Component } from 'react';
import Card from '../components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <Card />
      </div>
    );
  }
}

export default App;
