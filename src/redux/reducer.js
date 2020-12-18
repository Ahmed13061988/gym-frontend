import gymsReducer from './gymsReducer'
import {combineReducers} from 'redux'


export const reducer = combineReducers({gyms: gymsReducer})