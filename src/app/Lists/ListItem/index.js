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
  }
}

class ListItem extends Component {

  handleDelete = (todoListId) => {
    this.props.deleteListItem(todoListId)
  }
  render() {
    const { todoList, todos } = this.props
    return (
      <div style={styles.listItem}>
        <List>
          <ListHeader {...{todoList}} handleDelete={this.handleDelete} />
          <NewTodo listId={todoList.id} />
          {todos.map(todo => <Todo key={todo.id} {...{ todo }} />)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ List: { name } }) => ({
  name,
})

const mapDispatchToProps = {
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
  deleteListItem: actionCreators.deleteListItem.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
