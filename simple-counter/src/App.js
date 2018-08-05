import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 4},
        {id: 4, value: 5},
        {id: 5, value: 8},
        {id: 6, value: 9},
    ]
 };

 handleReset = counter => {
    const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({counters});
 };

 
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
};


 handleDelete= (counterId) =>{
    console.log('Handler Clicked', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
 };

  render() {
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        counters = {this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}/> 
      </main>
      </React.Fragment>
     
    );
  }
}

export default App;
