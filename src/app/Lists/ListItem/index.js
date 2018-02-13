import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'
import ContentClear from 'material-ui/svg-icons/content/clear'
import Todo from './Todo'
import ListName from './ListName'
import NewTodo from './NewTodo'

const styles = {
  listItem: {
    width: '300px',
    minHeight: '250px',
    border: '1px solid #ddd'
  },
  subheader: {
    lineHeight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#dedede',
  },
}

class ListItem extends Component {

  render() {
    const { todoList, deleteListItem, todos } = this.props
    return (
      <div style={styles.listItem}>
        <List>
          <Subheader style={styles.subheader}>
            <ListName todoList={todoList}/>
            <FloatingActionButton
              secondary={true}
              mini={true}
              onClick={() => deleteListItem(todoList.id)}
            >
              <ContentClear />
            </FloatingActionButton>
          </Subheader>
          <NewTodo listId={todoList.id}/>
          {todos.map(todo => <Todo key={todo.id} {...{todo}}/>)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ List: { name } }) => ({
  name
})

const mapDispatchToProps = {
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
  deleteListItem: actionCreators.deleteListItem.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
