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
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  button: {
    width: 'auto',
    verticalAlign: 'bottom',
    padding: '0',
    marginRight: '20px'
  },
}

export default ({
  setListItemName,
  setSearchedTodo,
  setSearchedList,
  handleSubmit
}) => {
  return (
    <article style={styles.listsHeader}>
      <form style={{ whiteSpace: 'nowrap' }} onSubmit={handleSubmit}>
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
      <div style={{ display: 'flex' }}>
        <div>
          <TextField
            hintText="Todo name"
            onChange={e => setSearchedTodo(e.target.value)}
            name="name"
            style={{ width: '140px' }}
            floatingLabelText="Search todo"
            required
          />
          <IconButton style={styles.button} type="submit">
            <ActionSearch hoverColor="#00bcd5" />
          </IconButton>
        </div>
        <div>
          <TextField
            hintText="List name"
            onChange={e => setSearchedList(e.target.value)}
            style={{ width: '140px' }}
            name="name"
            floatingLabelText="Search list"
            required
          />
          <IconButton style={styles.button} type="submit">
            <ActionSearch hoverColor="#00bcd5" />
          </IconButton>
        </div>
      </div>
    </article>
  )
}
