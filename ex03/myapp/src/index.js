// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// add the following code below this line

class App extends React.Component {
    render() {
        return ( <
            div className = "App" >
            <
            h1 > Hello, Padawans! < /h1> < /
            div >
        )
    }
}


ReactDOM.render( < App / > , document.getElementById('root'));