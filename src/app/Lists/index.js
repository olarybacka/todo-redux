import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../store/Lists/actionCreators'
import ListsHeader from './ListHeader'
import ListItem from './ListItem'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}

class MainListContainer extends Component {
  componentDidMount() {
    const { getLists, getTodos } = this.props
    getLists()
    getTodos()
  }

  render() {
    const { lists, setListItemName, name, addListItem, todos } = this.props
    return (
      <div>
        <ListsHeader {...{ setListItemName, name, addListItem }} />
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

const mapStateToProps = ({ mainLists: { lists, name, todos } }) => ({
  lists,
  name,
  todos,
})

const mapDispatchToProps = {
  getLists: actionCreators.getLists.create,
  getTodos: actionCreators.getTodos.create,
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer)
