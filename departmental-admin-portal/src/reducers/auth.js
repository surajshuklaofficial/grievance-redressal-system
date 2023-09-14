import { AUTH } from '../constants/actionTypes';

export default (state = {}, action) => {
    console.log(action, state);
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}))
            return { ...state, ...action?.data};

        // case LOGOUT:
        //     localStorage.clear();
        //     return {};

        default:
            return state;
    }
}