import * as api from '../api';

// import { FETCH_ALL_COMPLAINTS } from '../constants/actionTypes.js';

export const fetchComplaintsByDepartment = (departmentID) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaintsByDepartment(departmentID);
        dispatch({ type: 'FETCH_ALL_COMPLAINTS', data: data});
    } catch (err) {
        console.log(err);
    }
}