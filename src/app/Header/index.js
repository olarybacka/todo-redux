import React from 'react'
import './header.css'

export default ({ isLoading }) => (
  <header className="App-header">
    <div className="App-header-background1" />
    <div className="App-header-background2" />
    <h1 className="App-title">React + Redux todo lists creator</h1>
    <div>
      {isLoading ? (
        <div>
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : null}
    </div>
    {/* <div className={isLoading ? 'lds-circle' : 'circle'} /> */}
  </header>
)
