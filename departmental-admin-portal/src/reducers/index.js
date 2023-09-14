import { combineReducers } from "redux";

import auth from './auth';
import complaints from "./complaints";

export default combineReducers({ auth, complaints });