import React, { Component } from 'react'
import actionCreators from '../../../../store/Todos/actionCreators'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import EditTodo from './EditTodo'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    paddingLeft: '10px'
  },
}

class Todo extends Component {
  state = {
    hover: false,
    checked: false,
    edit: false,
  }

  handleCheck = e => {
    const { todo, putTodoItem } = this.props
    this.setState({ checked: e.target.checked })
    putTodoItem({
      id: todo.id,
      body: { ...todo, is_complete: e.target.checked },
    })
  }

  handleEdit = () => {
    this.setState({ edit: true })
  }

  handleTodoNameEdit = e => {
    e.preventDefault()
    const { todo, putTodoItem, todoItemName } = this.props
    putTodoItem({
      id: todo.id,
      body: { ...todo, name: todoItemName },
    })
    this.setState({ edit: false })
  }

  render() {
    const { todo, deleteTodoItem, setTodoItemName } = this.props
    const { hover } = this.state
    return (
      <div
        style={styles.container}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <TodoItem
          {...{ todo, setTodoItemName, hover }}
          handleTodoNameEdit={this.handleTodoNameEdit}
          handleCheck={this.handleCheck}
          edit={this.state.edit}
        />
        <EditTodo
          {...{ deleteTodoItem, hover, todo }}
          hover={true}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ Todo: { todoItemName } }) => ({
  todoItemName,
})

const mapDispatchToProps = {
  putTodoItem: actionCreators.putTodoItem.create,
  deleteTodoItem: actionCreators.deleteTodoItem.create,
  setTodoItemName: actionCreators.setTodoItemName.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
