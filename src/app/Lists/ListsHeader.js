import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ActionSearch from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton'

const styles = {
  listsHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '800px',
    margin: '0 auto'
  },
}

export default ({
  setListItemName,
  listName,
  addListItem,
  setSearchedTodo,
  setSearchedList
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    addListItem({ name: listName })
  }

  return (
    <div style={styles.listsHeader}>
      <form style={{width: '50%'}} onSubmit={handleSubmit}>
        <TextField
          hintText="List name"
          onChange={e => setListItemName(e.target.value)}
          name="name"
          floatingLabelText="Add new list"
          required
        />
        <FloatingActionButton mini={true} type="submit">
          <ContentAdd />
        </FloatingActionButton>
      </form>
      <form onSubmit={handleSubmit}>
        <TextField
          hintText="Todo name"
          onChange={e => setSearchedTodo(e.target.value)}
          name="name"
          style={{ width: '140px' }}
          floatingLabelText="Search todo"
          required
        />
        <IconButton style={styles.button} type="submit">
          <ActionSearch />
        </IconButton>
      </form>
      <form onSubmit={handleSubmit}>
        <TextField
          hintText="List name"
          onChange={e => setSearchedList(e.target.value)}
          style={{ width: '140px' }}
          name="name"
          floatingLabelText="Search list"
          required
        />
        <IconButton style={styles.button} type="submit">
          <ActionSearch />
        </IconButton>
      </form>
    </div>
  )
}
