import * as api from '../api';

import { FETCH_ALL_COMPLAINTS } from '../constants/actionTypes.js';

export const fetchComplaints = (resolverID) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaints(resolverID);

        dispatch({ type: FETCH_ALL_COMPLAINTS, data});
    } catch (err) {
        console.log(err);
    }
}

export const closeComplaint = (resolverID, complaintID) => async (dispatch) => {

}