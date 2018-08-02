import React, { Component } from 'react';

class Counter extends Component {
   state = {
       count: this.props.counter.value
  
   };
 
   getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.count === 0 ? "warning" : "primary";
    return classes;
};


    render() { 

    return (
    <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() =>this.props.onDelete(this.props.counter.id)}>Delete</button>
       
    </div>);
    }

    formatCount(){
        const {count} = this.props.counter;
        return this.state.count === 0 ? 'zero' : this.state.count;
    
    };
}
 



export default Counter;