import {combineReducers} from 'redux';

import login from './Autentication';
import hosts from './Hosts';

export default combineReducers({
    login,hosts
})