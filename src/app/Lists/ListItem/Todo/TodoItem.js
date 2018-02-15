import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

class TodoItem extends Component {
  handleOnFocus(e) {
    const { todo, setTodoItemName } = this.props
    e.target.value = ''
    e.target.value = todo.name
    setTodoItemName(e.target.value)
  }

  render() {
    const {
      todo,
      setTodoItemName,
      handleCheck,
      handleTodoNameEdit,
      edit,
      hover,
    } = this.props

    const styles = {
      todo: {
        textDecoration: todo.is_complete ? 'line-through' : 'none',
        padding: '12px',
        width: 'auto',
        display: edit ? 'none' : 'block',
        fontWeight: hover ? '900' : '400',
      },
    }

    return (
      <div>
        <Checkbox
          name={todo.name}
          label={todo.name}
          style={styles.todo}
          checked={todo.is_complete}
          onCheck={handleCheck}
        />
        <form onSubmit={handleTodoNameEdit}>
          {edit && (
            <TextField
              name={todo.name}
              style={{ width: 'auto', paddingLeft: '26px' }}
              defaultValue={todo.name}
              autoFocus
              onFocus={this.handleOnFocus}
              onBlur={handleTodoNameEdit}
              onChange={e => setTodoItemName(e.target.value)}
            />
          )}
        </form>
      </div>
    )
  }
}
export default TodoItem
