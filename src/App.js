import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainMenu from './components/MainMenu.js'

const Home = () => {
  return(
    <div>Home</div>
  )
}
const About = () => {
  return(
    <div>About</div>
  )
}
const Code = () => {
  return(
    <div>Code</div>
  )
}
const Contact = () => {
  return(
    <div>Contact</div>
  )
}
const Info = () => {
  return(
    <div>Info</div>
  )
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Router>
            <div>
              <MainMenu />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/code" component={Code} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/info" component={Info} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;


/* <p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn Reacttt
</a> */