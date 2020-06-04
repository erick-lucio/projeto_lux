const INITIAL_STATE = {
    logged:'false',
    key_auth:'none',
    name:'none',

}
export default function loginReducer(state = INITIAL_STATE,action = {}){
    switch(action.type){
        case "LOGIN_":
        return {
            ...state,
            logged:'true',
            key_auth:action.key_auth,
            name:action.name
        }
    
        case "LOGOF_":
        return {
            ...state,
            logged:'false',
            key_auth:'none',
            name:'none',
            
        }
        default:
    return state;
    }
}