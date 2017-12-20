import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Types from '../store/action-types';

class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    {
                        this.props.activeCount > 0 ?
                            <span style={{lineHeight: '34px'}}>你还有{this.props.activeCount}件待办事项</span> : null
                    }

                </div>
                <div className="col-sm-5">
                    <button className={"btn " + (this.props.filter === "all" ? "btn-success" : "btn-default")}
                            onClick={()=>this.props[Types.CHANGE_FILTER]('all')}>全部
                    </button>
                    <button className={"btn " + (this.props.filter === "active" ? "btn-success" : "btn-default")}
                            onClick={()=>this.props[Types.CHANGE_FILTER]('active')}
                            style={{marginLeft: 5}}>未完成
                    </button>
                    <button className={"btn " + (this.props.filter === "completed" ? "btn-success" : "btn-default")}
                            onClick={()=>this.props[Types.CHANGE_FILTER]('completed')}
                            style={{marginLeft: 5}}>已完成
                    </button>
                </div>
                <div className="col-sm-3">
                    {
                        this.props.completedCount > 0 ? <button className="btn btn-danger"
                                                                onClick={() => this.props[Types.DELETE_ALL_COMPLETED](45)}>
                            删除已完成</button> : null
                    }

                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        activeCount: state.todos.filter(item => !item.completed).length,
        completedCount: state.todos.filter(item => item.completed).length,
        filter: state.filter
    }),
    {
        [Types.DELETE_ALL_COMPLETED]: () => ({
            type: Types.DELETE_ALL_COMPLETED
        }),
        [Types.CHANGE_FILTER]: (filter) => ({
            type: Types.CHANGE_FILTER, filter
        })
    }
)(TodoFooter)