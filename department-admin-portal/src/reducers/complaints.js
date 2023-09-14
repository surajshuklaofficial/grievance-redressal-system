import { FETCH_ALL_COMPLAINTS, FETCH_COMPLAINTS_COUNT, SELECT_COMPLAINT, FETCH_COMPLAINTS_BY_STATUS, UPDATE_COMPLAINT_LIST } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_COMPLAINTS:
            return { ...state, data: action?.data};

        case FETCH_COMPLAINTS_BY_STATUS:
            return { ...state, data: action?.data};

        case FETCH_COMPLAINTS_COUNT:
            return { ...state, ...action?.data};

        case SELECT_COMPLAINT:
            return { ...state, selected_complaint: action?.data};

        case UPDATE_COMPLAINT_LIST:
            return { ...state, complaint_list: action?.status};

        default:
            return state;
    }
}