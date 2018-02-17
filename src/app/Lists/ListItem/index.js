import React, { Component } from 'react'
import { List } from 'material-ui/List'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'
import Todo from './Todo'
import NewTodo from './Todo/NewTodo'
import ListHeader from './ListHeader'
import TodoFilter from './TodoFilter'

class ListItem extends Component {
  state = {
    edit: false,
    complete: true,
    notComplete: true,
  }
  filteredTodos = this.props.todos

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

  handleFilter = (type, value) => {
    this.setState({
      [type]: value,
    })
  }

  componentWillReceiveProps(props) {
    const { todos, searchedTodo } = props
    this.filteredTodos = todos.filter(todo =>
      todo.name.toUpperCase().includes(searchedTodo.toUpperCase())
    )
  }
  render() {
    const { todoList, setListItemName } = this.props
    const styles = {
      listItem: {
        width: '300px',
        minHeight: '250px',
        border: '1px solid #ddd',
        background: '#fff',
        margin: '10px',
        opacity: this.filteredTodos.length > 0 ? '1' : '0.3',
      },
    }

    return (
      <div style={styles.listItem}>
        <List style={{ padding: 0 }}>
          <ListHeader
            {...{ todoList, setListItemName }}
            handleListNameEdit={this.handleListNameEdit}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            edit={this.state.edit}
            handleOnFocus={this.handleOnFocus}
          />
          <TodoFilter
            handleCheck={this.handleFilter}
            complete={this.state.complete}
            notComplete={this.state.notComplete}
          />
          <NewTodo listId={todoList.id} />
          {this.filteredTodos
            .filter(
              todo => (this.state.complete ? todo : todo.is_complete === false)
            )
            .filter(
              todo =>
                this.state.notComplete ? todo : todo.is_complete === true
            )
            .map(todo => <Todo key={todo.id} {...{ todo }} />)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ List: { listName }, Todo: { searchedTodo } }) => ({
  listName,
  searchedTodo,
})

const mapDispatchToProps = {
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
  deleteListItem: actionCreators.deleteListItem.create,
  putListItemName: actionCreators.putListItemName.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
