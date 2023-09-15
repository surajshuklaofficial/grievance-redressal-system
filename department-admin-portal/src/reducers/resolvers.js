import { FETCH_ALL_RESOLVER } from "../constants/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_RESOLVER:
        return { ...state, resolvers: action?.data};

        default:
            return state;
    }
}