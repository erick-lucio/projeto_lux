import { Action } from '../Actions';
export interface Hosts{
  backend_url:string,
  http:boolean,
  https:boolean
}
const initial_state_host = {
  backend_url:'https://nodeserver12.herokuapp.com/',
  http:false,
  https:false
}
export default function HostReducer(state:Hosts = initial_state_host,action:Action){
  switch(action.type){
      case "SET_URL_":
      return {
          ...state,
          backend_url:action.url,           
      }    
      case "SET_HTTP_":
      return {
          ...state,
          http:action.http           
          
      }
      case "SET_HTTPS_":
          return{
          ...state,
          https:action.https
          }
      default:
          return state;
  }
}