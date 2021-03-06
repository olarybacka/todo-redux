import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import MainListsContainer from './Lists'
import Footer from './Footer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header isLoading={this.props.isLoading}/>
        <MainListsContainer />
        <Footer />
      </section>
    )
  }
}

const mapStateToProps = ({ Loading: { isLoading } }) => ({
  isLoading,
})

export default connect(mapStateToProps)(App)
