import * as Types from '../action-types';

export default function (state = 'all', action) {
    switch (action.type) {
        case Types.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}