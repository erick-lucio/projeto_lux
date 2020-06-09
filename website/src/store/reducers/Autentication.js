const INITIAL_STATE_AUTH = {
    logged:'none',
    key_auth:'none',
    name:'none',
    sucessfull_signin:'false'

}
export default function loginReducer(state = INITIAL_STATE_AUTH,action = {}){
    switch(action.type){
        case "LOGIN_":
        return {
            ...state,
            logged:action.logstate,
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
        case "SIGNIN_":
            return{
                ...state,
                sucessfull_signin:action.sucessfull_signin
            }
        default:
            return state;
    }
}