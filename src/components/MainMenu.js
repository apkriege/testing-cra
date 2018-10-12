import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// testing stateless components
const MainMenu = () => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/code"><button>Code</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/info"><button>Info</button></Link>
        </div>
    )
}

// this works but is a class
// class MainMenu extends React.Component {
//     render () {
//         return (
//             <div>testing</div>
//         )
//     }
// }

// both export the same way
export default MainMenu;