import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../store/Lists/actionCreators'
import ListHeader from './ListHeader'
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
    const { getLists } = this.props
    getLists()
  }

  render() {
    const { lists, setListItemName, name, addListItem } = this.props
    return (
      <div>
        <ListHeader {...{ setListItemName, name, addListItem }} />
        <article style={styles.root}>
          {lists.map(todoList => (
            <ListItem key={todoList.id} todoList={todoList} />
          ))}
        </article>
      </div>
    )
  }
}

const mapStateToProps = ({ mainLists: { lists, name } }) => ({
  lists,
  name,
})

const mapDispatchToProps = {
  getLists: actionCreators.getLists.create,
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer)
