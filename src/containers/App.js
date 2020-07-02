import React, { Component } from 'react';
import { robots } from '../robots';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchfield: '',
      robots: robots,
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
