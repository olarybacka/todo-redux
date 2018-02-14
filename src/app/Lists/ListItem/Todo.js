import React, { Component } from 'react'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Checkbox from 'material-ui/Checkbox'
import actionCreators from '../../../store/Todos/actionCreators'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'

class Todo extends Component {
  state = {
    hover: false,
    checked: false,
  }

  handleCheck = e => {
    const { todo, putTodoItem } = this.props
    this.setState({ checked: e.target.checked })
    putTodoItem({
      id: todo.id,
      body: { ...todo, is_complete: e.target.checked },
    })
  }

  render() {
    const styles = {
      todo: {
        textDecoration: this.props.todo.is_complete ? 'line-through' : 'none',
        padding: '12px',
        width: 'auto',
      },
      button: {
        display: this.state.hover ? 'inline-block' : 'none',
      },
      container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    }
    const { todo, deleteTodoItem } = this.props
    return (
      <div
        style={styles.container}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <Checkbox
          name={todo.name}
          label={todo.name}
          style={styles.todo}
          defaultChecked={this.state.checked}
          onCheck={e => this.handleCheck(e)}
        />
        <div>
          <IconButton
            style={styles.button}
            onClick={() => deleteTodoItem(todo.id)}
          >
            <ActionDelete />
          </IconButton>
          <IconButton style={styles.button}>
            <EditorModeEdit />
          </IconButton>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  postTodoItem: actionCreators.postTodoItem.create,
  putTodoItem: actionCreators.putTodoItem.create,
  deleteTodoItem: actionCreators.deleteTodoItem.create,
}

export default connect(null, mapDispatchToProps)(Todo)
