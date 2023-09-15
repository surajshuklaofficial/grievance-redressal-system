import axios from 'axios';

const API = axios.create({baseURL: import.meta.env.VITE_REACT_APP_PRODUCTION_URL});

export const login = (formData) => API.post('/api/v1/department/auth/admin/login', formData);
export const register = (formData) => API.post('/api/v1/department/auth/admin/register', formData);

export const fetchComplaints = (fieldOfficerID) => API.get(`/api/v1/resolver/${fieldOfficerID}/complaints/assigned`)