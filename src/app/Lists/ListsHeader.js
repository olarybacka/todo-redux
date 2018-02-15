import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default ({ setListItemName, listName, addListItem }) => {
  const handleSubmit = e => {
    e.preventDefault()
    addListItem({ name: listName })
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}
