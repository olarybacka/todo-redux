import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import MainListsContainer from "./Lists";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header />
        <MainListsContainer />
      </div>
    );
  }
}

export default App;
