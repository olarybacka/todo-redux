import React from 'react'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'

export default ({deleteTodoItem, hover, todo, handleEdit}) => {
  const styles = {
    button: {display: hover ? 'inline-block' : 'none'}
  }
  return (
    <div>
      <IconButton style={styles.button} onClick={() => deleteTodoItem(todo.id)}>
        <ActionDelete />
      </IconButton>
      <IconButton
        style={styles.button}
        onClick={handleEdit}
      >
        <EditorModeEdit />
      </IconButton>
    </div>
  )
}
