import gymsReducer from './gymsReducer'
import {combineReducers} from 'redux'
import userReducer from './userReducer'


export const reducer = combineReducers({gyms: gymsReducer , user: userReducer})