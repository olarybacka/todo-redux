import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentClear from 'material-ui/svg-icons/content/clear'
import Checkbox from 'material-ui/Checkbox'
import actionCreators from '../../../store/Todos/actionCreators'
import { connect } from 'react-redux'

class Todo extends Component {
  handleCheck = e => {
    const { todo, putTodoItem } = this.props
    putTodoItem({
      id: todo.id,
      body: { ...todo, is_complete: e.target.checked },
    })
  }
  styles = {
    todo: {
      textDecoration: this.props.todo.is_complete ? 'line-through' : 'none',
    },
  }
  render() {
    const { todo } = this.props
    return (
      <div>
        <Checkbox
          name="inputA1"
          label={todo.name}
          style={this.styles.todo}
          defaultChecked={todo.is_complete}
          onCheck={e => this.handleCheck(e)}
        />
        <FloatingActionButton
          secondary={true}
          mini={true}
          onClick={() => console.log(todo.id)}
        >
          <ContentClear />
        </FloatingActionButton>
      </div>
    )
  }
}

const mapDispatchToProps = {
  postTodoItem: actionCreators.postTodoItem.create,
  putTodoItem: actionCreators.putTodoItem.create,
}

export default connect(null, mapDispatchToProps)(Todo)
