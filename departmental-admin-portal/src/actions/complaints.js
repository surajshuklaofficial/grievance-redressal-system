import * as api from '../api';

// import { FETCH_ALL_COMPLAINTS } from '../constants/actionTypes.js';

export const fetchComplaintsByDepartment = (departmentID) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaintsByDepartment(departmentID);
        
        console.log(data);
        dispatch({ type: 'FETCH_ALL_COMPLAINTS', data});
    } catch (err) {
        console.log(err);
    }
}