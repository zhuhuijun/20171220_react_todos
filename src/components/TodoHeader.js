import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../store/action-types';

class TodoHeader extends Component {
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            let title = event.target.value;
            this.props.addTodo(title);
            event.target.value = "";
        }
    }

    render() {
        return (
            <input type="text" className="form-control"
                   onKeyDown={this.handleKeyDown}/>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        addTodo: (title) => dispatch({type: Types.ADD_TODO, title})
    })
)(TodoHeader);