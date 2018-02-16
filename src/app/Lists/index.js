import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreatorsLists from '../../store/Lists/actionCreators'
import actionCreatorsTodos from '../../store/Todos/actionCreators'
import ListsHeader from './ListsHeader'
import ListItem from './ListItem'

class MainListContainer extends Component {
  componentDidMount() {
    const { getLists, getTodos } = this.props
    getLists()
    getTodos()
  }

  render() {
    const { lists, setListItemName, listName, addListItem, todos, setSearchedTodo } = this.props
    const styles = {
      root: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '2',
      },
    }
    return (
      <div>
        <ListsHeader
          {...{ setListItemName, listName, addListItem, setSearchedTodo }}
        />
        <article style={styles.root}>
          {lists.map(todoList => {
            return (
              <ListItem
                key={todoList.id}
                todoList={todoList}
                todos={todos.filter(todo => todo.todo_list === todoList.id)}
              />
            )
          })}
        </article>
      </div>
    )
  }
}

const mapStateToProps = ({ List: { lists, listName }, Todo: { todos } }) => ({
  lists,
  listName,
  todos,
})

const mapDispatchToProps = {
  getLists: actionCreatorsLists.getLists.create,
  getTodos: actionCreatorsTodos.getTodos.create,
  addListItem: actionCreatorsLists.addListItem.create,
  setListItemName: actionCreatorsLists.setListItemName.create,
  setSearchedTodo: actionCreatorsTodos.setSearchedTodo.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer)
