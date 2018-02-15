import React from 'react'
import ListName from './ListName'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import Subheader from 'material-ui/Subheader'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'

const styles = {
  subheader: {
    lineHeight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#dedede',
  },
}

export default ({
  todoList,
  handleDelete,
  handleEdit,
  edit,
  handleListNameEdit,
  handleOnFocus,
  setListItemName,
}) => {
  return (
    <Subheader style={styles.subheader}>
      <ListName
        {...{
          todoList,
          edit,
          handleListNameEdit,
          setListItemName,
          handleOnFocus,
        }}
      />
      <div>
        <IconButton style={styles.button} onClick={() => handleEdit()}>
          <EditorModeEdit color={'#fff'} hoverColor={'#00bcd5'} />
        </IconButton>

        <IconButton
          style={styles.button}
          onClick={() => handleDelete(todoList.id)}
        >
          <ActionDelete color={'#fff'} hoverColor={'#ff4081'} />
        </IconButton>
      </div>
    </Subheader>
  )
}
