import {createStore} from 'redux';
import {combineReducers} from 'redux';

import auth from './reducers/Autentication';
import hosts from './reducers/Hosts';

const combinedReducers = combineReducers({
    auth,hosts
})

const store = createStore(combinedReducers);

export default store;