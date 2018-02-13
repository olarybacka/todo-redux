import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { connect } from 'react-redux'
import actionCreators from '../../../store/Lists/actionCreators'

class ListItem extends Component {
  render() {
    const { todoList: { id, name }, deleteListItem } = this.props
    return (
      <div>
        <List>
          <Subheader>{name}</Subheader>
          <FloatingActionButton mini={true} onClick={() => deleteListItem(id)}>
            X
          </FloatingActionButton>
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ mainLists: { lists, name } }) => ({
  lists,
  name,
})

const mapDispatchToProps = {
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
  deleteListItem: actionCreators.deleteListItem.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
