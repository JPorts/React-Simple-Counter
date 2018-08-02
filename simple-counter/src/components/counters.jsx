import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
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
     }

     
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        console.log(this.state.counters[0]);
    };


     handleDelete= (counterId) =>{
        console.log('Handler Clicked', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
     };

    render() { 
        return (
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset </button>
            {this.state.counters.map(counter => (
            <Counter 
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            >
            </Counter>

        ))}
        </div>
        );
    }
}
 
export default Counters;