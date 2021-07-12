import counterReducer from './counter';
import navReducer from './navbar'

import {combineReducers} from 'redux';
const allreducers = combineReducers({ counter: counterReducer, nav : navReducer})
export default allreducers