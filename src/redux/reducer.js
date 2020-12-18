import gymsReducer from './gymsReducer'
import {combineReducers} from 'redux'
import userReducer from './userReducer'
import gymsReducer from './gymsReducer'


export const reducer = combineReducers({gyms: gymsReducer , user: userReducer})