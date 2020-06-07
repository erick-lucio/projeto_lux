import {combineReducers} from 'redux';

import auth from './Autentication';
import hosts from './Hosts';

export default combineReducers({
    auth,hosts
})