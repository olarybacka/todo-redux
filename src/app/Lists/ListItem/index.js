import React, { Component } from 'react'
import { List } from 'material-ui/List'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'
import Todo from './Todo'
import NewTodo from './Todo/NewTodo'
import ListHeader from './ListHeader'

const styles = {
  listItem: {
    width: '300px',
    minHeight: '250px',
    border: '1px solid #ddd',
  },
}

class ListItem extends Component {
  state = {
    edit: false,
  }

  handleDelete = todoListId => {
    this.props.deleteListItem(todoListId)
  }
  handleEdit = () => {
    this.setState({ edit: true })
  }
  handleOnFocus = e => {
    const { todoList, setListItemName } = this.props
    e.target.value = ''
    e.target.value = todoList.name
    setListItemName(e.target.value)
  }

  handleListNameEdit = e => {
    e.preventDefault()
    const { todoList, putListItemName, listName } = this.props
    putListItemName({
      id: todoList.id,
      body: { ...todoList, name: listName },
    })
    this.setState({ edit: false })
  }
  render() {
    const { todoList, todos, setListItemName } = this.props
    return (
      <div style={styles.listItem}>
        <List>
          <ListHeader
            {...{ todoList, setListItemName }}
            handleListNameEdit = {this.handleListNameEdit}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            edit={this.state.edit}
            handleOnFocus={this.handleOnFocus}
          />
          <NewTodo listId={todoList.id} />
          {todos.map(todo => <Todo key={todo.id} {...{ todo }} />)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ List: { listName } }) => ({
  listName,
})

const mapDispatchToProps = {
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
  deleteListItem: actionCreators.deleteListItem.create,
  putListItemName: actionCreators.putListItemName.create
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
