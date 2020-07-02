import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
