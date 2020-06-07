const INITIAL_STATE = {
    backend_url:"https://server-node-test-1.herokuapp.com/",

   

}
export default function testeReducer(state = INITIAL_STATE,action = {}){
    switch(action.type){
        case "SET_BACKEND_URL":
            return {
                ...state,            
                backend_url:action.url
            }
    
        default:
            return {
                state
            }
    

    
    }
}
