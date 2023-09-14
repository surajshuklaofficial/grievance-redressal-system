import { FETCH_ALL_COMPLAINTS } from '../constants/actionTypes';

export default (state = {}, action) => {
    console.log(action, state);
    switch (action.type) {
        case FETCH_ALL_COMPLAINTS:
            return { ...state, ...action?.data};

        // case LOGOUT:
        //     localStorage.clear();
        //     return {};

        default:
            return state;
    }
}