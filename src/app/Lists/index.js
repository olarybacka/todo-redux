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
    const {
      lists,
      setListItemName,
      listName,
      addListItem,
      todos,
      setSearchedTodo,
      setSearchedList,
      searchedList,
    } = this.props
    const styles = {
      lists: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '2',
      },
      container: {
        maxWidth: '1300px',
        margin: '0 auto'
      }
    }
    return (
      <div style={styles.container}>
        <ListsHeader
          {...{
            setListItemName,
            listName,
            addListItem,
            setSearchedTodo,
            setSearchedList,
          }}
        />
        <article style={styles.lists}>
          {lists
            .filter(list =>
              list.name.toUpperCase().includes(searchedList.toUpperCase())
            )
            .map(todoList => {
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

const mapStateToProps = ({
  List: { lists, listName, searchedList },
  Todo: { todos },
}) => ({
  lists,
  listName,
  todos,
  searchedList,
})

const mapDispatchToProps = {
  getLists: actionCreatorsLists.getLists.create,
  getTodos: actionCreatorsTodos.getTodos.create,
  addListItem: actionCreatorsLists.addListItem.create,
  setListItemName: actionCreatorsLists.setListItemName.create,
  setSearchedTodo: actionCreatorsTodos.setSearchedTodo.create,
  setSearchedList: actionCreatorsLists.setSearchedList.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer)
