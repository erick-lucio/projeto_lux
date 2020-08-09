import {Action} from "../Actions";
export interface Auth{
    logged: string,
    key_auth: string,
    name: string,
    sucessfull_signin: boolean,

}

const initial_state_auth = {
  logged:'',
  key_auth:'',
  name:'erick',
  sucessfull_signin:false

}



export default function loginReducer(state:Auth = initial_state_auth,action:Action  ){
  switch(action.type){
      case "T1":
      return { 
          ...state,
          logged:action.logstate,
          key_auth:action.key_auth,
          name:action.name
      }  
      default:
          return state;
  }
}