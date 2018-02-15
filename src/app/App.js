import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import MainListsContainer from './Lists'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainListsContainer />
        <Footer />
      </div>
    )
  }
}

export default App
