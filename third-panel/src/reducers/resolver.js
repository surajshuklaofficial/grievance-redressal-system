import { FETCH_ALL_COMPLAINTS } from "../constants/actionTypes.js";

export default (state = {}, action) => {
    switch (action.type) {
        
        case FETCH_ALL_COMPLAINTS:
            return { ...state, complaints: action.data.complaintsAssigned };

        default:
            return state;
    }
}
