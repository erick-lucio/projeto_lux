import {useSelector,useDispatch}from 'react-redux'
import security from './Security';
//const store_data = useSelector(state => state)
//const dispatch_func= useDispatch();
const key_pass = "12345"

async function saveLocally(obj){
    obj.forEach(element => {
        window.localStorage.setItem(element.key,security.hashString(key_pass,element.value) );
    });

}
async function getLocally(get_key){   
     
    
    return security.decryptString(key_pass,window.localStorage.getItem(get_key));
    
}
async function clearStorage(){
    window.localStorage.clear()
}

export default {saveLocally,getLocally}