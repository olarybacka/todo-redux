import React from 'react'
import TextField from 'material-ui/TextField'

const styles = {
  name: {
    padding: '15px 0px',
    width: 'auto',
    color: '#000',
    fontSize: '1rem'
  }
}
export default ({
  todoList,
  edit,
  handleListNameEdit,
  setListItemName,
  handleOnFocus,
}) => {
  const { name } = todoList
  return edit ? (
    <form onSubmit={handleListNameEdit}>
      <TextField
        name={todoList.name}
        style={{ width: 'auto' }}
        defaultValue={todoList.name}
        autoFocus
        onFocus={handleOnFocus}
        onBlur={handleListNameEdit}
        onChange={e => setListItemName(e.target.value)}
      />
    </form>
  ) : (
    <div style={styles.name}> {name} </div>
  )
}
