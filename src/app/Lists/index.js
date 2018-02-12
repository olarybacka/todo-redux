import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../store/Lists/actionCreators";
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'
import ContentAdd from 'material-ui/svg-icons/content/add'

class MainListContainer extends Component {
  componentDidMount() {
    const { getLists } = this.props;
    getLists();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, addListItem } = this.props;
    addListItem({ name })
  }

  render() {
    const { lists, setListItemName } = this.props;
    const { handleSubmit } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            hintText="List name"
            onChange={(e) => setListItemName(e.target.value)}
            name="name"
            floatingLabelText="Add new list"
            required
          />
          <FloatingActionButton mini={true} type="submit">
            <ContentAdd />
          </FloatingActionButton>
        </form>
        <pre>{JSON.stringify(lists)}</pre>
      </div>
    );
  }
}

const mapStateToProps = ({ mainLists: { lists, name } }) => ({
  lists,
  name
});

const mapDispatchToProps = {
  getLists: actionCreators.getLists.create,
  addListItem: actionCreators.addListItem.create,
  setListItemName: actionCreators.setListItemName.create
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer);
