import * as api from '../api';

import { AUTH } from '../constants/actionTypes';

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);

        dispatch({ type: AUTH, data});
    } catch (err) {
        console.log(err);
    }
}

export const register = (formData) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);

        dispatch({ type: AUTH, data});
    } catch (err) {
        console.log(err);
    }
}