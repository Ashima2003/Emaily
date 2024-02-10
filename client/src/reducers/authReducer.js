import {FETCH_USER} from '../actions/types';

function authReducer(state=null, action){
    console.log(action);
    switch(action.type){
        case FETCH_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}

export default authReducer;