import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'
import actionCreators from '../../../store/Lists/actionCreators'
import { connect } from 'react-redux'

class NewTodo extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.postTodoItem({
      name: this.state.newTodo,
      is_complete: false,
      todo_list: this.props.listId,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="List name"
            onChange={e => this.setState({ newTodo: e.target.value })}
            name="name"
            floatingLabelText="Add new list"
            required
          />
          <FloatingActionButton mini={true} type="submit">
            <ContentAdd />
          </FloatingActionButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  postTodoItem: actionCreators.postTodoItem.create,
}

export default connect(null, mapDispatchToProps)(NewTodo)
