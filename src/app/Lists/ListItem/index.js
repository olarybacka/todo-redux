import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import Todo from './Todo'
import ListName from './ListName'
import NewTodo from './Todo/NewTodo'
import IconButton from 'material-ui/IconButton'

const styles = {
  listItem: {
    width: '300px',
    minHeight: '250px',
    border: '1px solid #ddd',
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
            <ListName todoList={todoList} />
            <div>
              <IconButton
                style={styles.button}
                onClick={() => {}}
              >
                <EditorModeEdit color={'#fff'} hoverColor={'#00bcd5'} />
              </IconButton>

              <IconButton
                style={styles.button}
                onClick={() => deleteListItem(todoList.id)}
              >
                <ActionDelete color={'#fff'} hoverColor={'#ff4081'} />
              </IconButton>
            </div>
          </Subheader>
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
