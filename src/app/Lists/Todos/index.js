import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'

class Todos extends Component {
  componentDidMount() {
    const { getTodosOfList, listId } = this.props
    getTodosOfList(listId)
  }

  render() {

    const { todoLists, listId } = this.props
    console.log('todoLists: ', todoLists);

    return (
      <div>
        {todoLists
          .filter(todo => todo.todo_list === listId)
          .map(todo => <div key={todo.id}> name: {todo.name} </div>)}
      </div>
    )
  }
}

const mapStateToProps = ({ mainLists: { todoLists } }) => ({
  todoLists,
})

const mapDispatchToProps = {
  getTodosOfList: actionCreators.getTodosOfList.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
