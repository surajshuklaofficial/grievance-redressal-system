import axios from 'axios';

const DEVELOPMENT_URL = 'http://localhost:5050';
const DEPLOYMENT_URL = '';

const API = axios.create({baseURL: DEVELOPMENT_URL});

export const fetchComplaintsByDepartment = (departmentID) => API.get(`/api/v1/department/${departmentID}/admin/dashboard/complaints`);


export const login = (formData) => API.post('/api/v1/department/auth/admin/login', formData);
export const register = (formData) => API.post('/api/v1/department/auth/admin/register', formData);