import * as Types from '../action-types';

export default function (state = [], action) {
    switch (action.type) {
        case Types.ADD_TODO:
            return [...state, {
                id: Date.now(),
                title: action.title,
                completed: false
            }];
        case Types.DEL_TODO:
            return state.filter(item => item.id !== action.id);
        //修改状态
        case Types.TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.id) {
                    item.completed = !item.completed;
                    return item;
                }
                return item;
            });
        case Types.TOGGLE_ALL:
            return state.map(item => {
                item.completed = action.check
                return item
            })
        case Types.DELETE_ALL_COMPLETED:
            return state.filter(item => !item.completed);
        default:
            return state;
    }
}