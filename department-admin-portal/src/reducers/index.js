import { combineReducers } from "redux";

import auth from './auth';
import complaints from "./complaints";
import resolvers from './resolvers';

export default combineReducers({ auth, complaints, resolvers });