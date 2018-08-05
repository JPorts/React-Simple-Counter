import React from 'react';

// Stateless Functional Component 

const Navbar = ({totalCounters}) => {
     
        return (

             <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#/">Navbar</a>
                <span className="badge badge-pill badge-secondary">
                {totalCounters}
                </span>
            </nav>
          );
};

 
export default Navbar;