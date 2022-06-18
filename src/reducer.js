import { combineReducers } from 'redux';
import ContactListReducer from "./components/ContactListDic";

const rootReducer = combineReducers({
    contacts: ContactListReducer
})

export default rootReducer