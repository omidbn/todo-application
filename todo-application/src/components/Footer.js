import React from 'react'
import FilterLink from '../containers/FilterLink'
import {clearComplete, VisibilityFilters} from '../actions'
import {connect} from 'react-redux';

class Footer extends React.Component{
    render() {
        return(
            <div className="box-footer">
                <span>{this.props.todos.length} items left </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
                <a href="#!" onClick={this.props.clearComplete}>clear Completed</a>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    const { todos } = store;
    return { todos };
};

const mapDispatchToProps = dispatch => ({
    clearComplete: () => dispatch(clearComplete()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Footer)