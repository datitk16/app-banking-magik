  
import { combineReducers } from 'redux';
import users from'./User';
import accounts from './Account'
const appReducer = combineReducers({
    users,
    accounts
})
export default appReducer;