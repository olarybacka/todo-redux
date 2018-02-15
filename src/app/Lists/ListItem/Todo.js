import React, { Component } from 'react'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Checkbox from 'material-ui/Checkbox'
import actionCreators from '../../../store/Todos/actionCreators'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'

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
    const styles = {
      todo: {
        textDecoration: this.props.todo.is_complete ? 'line-through' : 'none',
        padding: '12px',
        width: 'auto',
        display: this.state.edit ? 'none' : 'block',
      },
      button: {
        display: this.state.hover ? 'inline-block' : 'none',
      },
      container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    }
    const { todo, deleteTodoItem, setTodoItemName } = this.props
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
          defaultChecked={todo.is_complete}
          onCheck={e => this.handleCheck(e)}
        />
        <form
          onSubmit={e => this.handleTodoNameEdit(e)}
          style={{ display: this.state.edit ? 'block' : 'none' }}
        >
          {/* <input
            autoFocus
            defaultValue={todo.name}
            type="text"
            onBlur={e => this.handleTodoNameEdit(e)}
            onChange={e => setTodoItemName(e.target.value)}
          /> */}

          <TextField
            name={todo.name}
            style={{ width: 'auto', paddingLeft: '26px' }}
            defaultValue={todo.name}
            onBlur={e => this.handleTodoNameEdit(e)}
            onChange={e => setTodoItemName(e.target.value)}
          />
        </form>
        <div>
          <IconButton
            style={styles.button}
            onClick={() => deleteTodoItem(todo.id)}
          >
            <ActionDelete />
          </IconButton>
          <IconButton
            style={styles.button}
            onClick={() => this.setState({ edit: true })}
          >
            <EditorModeEdit onClick={this.handleEdit} />
          </IconButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Todo: { todoItemName } }) => ({
  todoItemName,
})

const mapDispatchToProps = {
  postTodoItem: actionCreators.postTodoItem.create,
  putTodoItem: actionCreators.putTodoItem.create,
  deleteTodoItem: actionCreators.deleteTodoItem.create,
  setTodoItemName: actionCreators.setTodoItemName.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
