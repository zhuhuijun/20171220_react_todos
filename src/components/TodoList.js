import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../store/action-types';

class TodoList extends Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.todos.length > 0 ? <li className="list-group-item">
                        <input type="checkbox"
                               onChange={event => this.props.toggleAll(event.target.checked)}
                               checked={this.props.activeCount == 0}/>
                        {this.props.activeCount == 0 ? <span style={{
                            marginLeft: 25
                        }}>全部取消</span> : <span style={{
                            marginLeft: 25
                        }}>全部选中</span>}
                    </li> : null
                }

                {
                    this.props.todos.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            <input type="checkbox"
                                   onChange={() => this.props[Types.TOGGLE_TODO](item.id)}
                                   checked={item.completed}/>
                            <span style={{
                                marginLeft: 25,
                                textDecoration: item.completed ? 'line-through' : '',
                            }}>{item.title}</span>
                            <span className="pull-right"><button
                                className="btn btn-danger btn-xs"
                                onClick={() => this.props[Types.DEL_TODO](item.id)}>X</button></span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default connect(
    state => ({
        todos: state.todos.filter(item => {
            switch (state.filter) {
                case 'active':
                    return !item.completed;
                    break;
                case "completed":
                    return item.completed;
                    break;
                default:
                    return true;
            }
        }),
        activeCount: state.todos.filter(item => !item.completed).length
    }),
    /*   dispatch => ({
           delTodo: (id) => dispatch({type: Types.DEL_TODO, id})
       })*/
    {
        //删除一项
        [Types.DEL_TODO]: id => ({
            type: Types.DEL_TODO, id
        }),
        deleteTodo: id => ({
            type: Types.DEL_TODO, id
        }),
        [Types.TOGGLE_TODO]: id => ({
            type: Types.TOGGLE_TODO, id
        }),
        toggleAll: check => ({type: Types.TOGGLE_ALL, check})
    }
)(TodoList);