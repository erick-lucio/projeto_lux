import {createStore, Reducer, CombinedState, Store} from 'redux';
import {combineReducers} from 'redux';

import auth from './reducers/Autentication';
import hosts from './reducers/Hosts';
import { Auth } from './reducers/Autentication'
import {Hosts} from './reducers/Hosts'

export interface combinedInterface{
  auth: Auth,
  hosts:Hosts
}

const combinedReducers = combineReducers({
    auth,hosts
})

const store = createStore(combinedReducers);


export default store;