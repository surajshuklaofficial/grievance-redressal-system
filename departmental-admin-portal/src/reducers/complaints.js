import { FETCH_ALL_COMPLAINTS } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_COMPLAINTS:
            return { ...state, data: action?.data};

        default:
            return state;
    }
}