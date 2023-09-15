import * as api from '../api';

import { FETCH_ALL_RESOLVER } from '../constants/actionTypes.js';

export const fetchResolvers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchResolvers();
        dispatch({ type: FETCH_ALL_RESOLVER, data});
    } catch (err) {
        console.log(err);
    }
}