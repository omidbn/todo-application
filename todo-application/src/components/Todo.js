import React from 'react'
import PropTypes from 'prop-types'
import {deleteItem} from "../actions";
import {connect} from "react-redux";

class Todo extends React.Component
{
    render()
    {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
                <span className='delete-item' onClick={() => this.props.deleteItem(this.props.id)}>✕</span>
            </li>
        )
    }
}


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(null,mapDispatchToProps)(Todo)
