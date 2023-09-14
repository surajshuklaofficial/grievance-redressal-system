import * as api from '../api';

import { FETCH_ALL_COMPLAINTS, FETCH_COMPLAINTS_COUNT } from '../constants/actionTypes.js';

export const fetchComplaintsByDepartment = (departmentID) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaintsByDepartment(departmentID);
        dispatch({ type: FETCH_ALL_COMPLAINTS, data: data});
    } catch (err) {
        console.log(err);
    }
}

export const fetchComplaintsByDepartmentAndStatus = (departmentID, status) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaintsByDepartmentAndStatus(departmentID, status);
        dispatch({ type: FETCH_ALL_COMPLAINTS, data: data});
    } catch (err) {
        console.log(err);
    }
}

export const fetchComplaintsCountByDepartment = (departmentID) => async (dispatch) => {
    try {
        const { data } = await api.fetchComplaintsCountByDepartment(departmentID);
        dispatch({ type: FETCH_COMPLAINTS_COUNT, data: data});
    } catch (err) {
        console.log(err);
    }
}
