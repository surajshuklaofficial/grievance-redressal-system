import { combineReducers } from "redux";

import resolver from './resolver.js';
import auth from './auth.js';

export default combineReducers({ resolver, auth });