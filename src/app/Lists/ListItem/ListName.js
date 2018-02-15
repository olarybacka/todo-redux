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
    <form onSubmit={(e) => handleListNameEdit(e)}>
      <TextField
        name={todoList.name}
        style={{ width: 'auto', paddingLeft: '26px' }}
        defaultValue={todoList.name}
        autoFocus
        onFocus={e => handleOnFocus(e)}
        onBlur={e => handleListNameEdit(e)}
        onChange={e => setListItemName(e.target.value)}
      />
    </form>
  ) : (
    <div>{name}</div>
  )
}
