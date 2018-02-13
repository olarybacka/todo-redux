import React, { Component } from 'react'

class Todos extends Component {

  render() {

    const { todo } = this.props

    return (
      <div>
        {todo.name}
      </div>
    )
  }
}

export default Todos
