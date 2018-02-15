import React from 'react'
import TextField from 'material-ui/TextField'

export default ({
  todoList,
  edit,
  handleListNameEdit,
  setListItemName,
  handleOnFocus,
}) => {
  const { name } = todoList
  return edit ? (
    <form onSubmit={e => handleListNameEdit(e)}>
      <TextField
        name={todoList.name}
        style={{ width: 'auto' }}
        defaultValue={todoList.name}
        autoFocus
        onFocus={e => handleOnFocus(e)}
        onBlur={e => handleListNameEdit(e)}
        onChange={e => setListItemName(e.target.value)}
      />
    </form>
  ) : (
    <TextField name={todoList.name} value={name} style={{ width: 'auto' }} />
  )
}
