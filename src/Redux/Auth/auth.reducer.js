import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SEARCH_USER_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

const initialStateValues={
    jwt:null,
    error:null,
    loading:false,
    user:null,
    searchUser:[]
}


export const authReducer=(state=initialStateValues,action)=>{

    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {...state, loading:true,error:null}

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state,jwt:action.payload,loading:false,error:null}

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {...state,loading:false,error:action.payload}

        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS:
            return {...state,user:action.payload,error:null, loading:false}

        case GET_PROFILE_REQUEST:
            return {...state,loading:false,error:null}

        case SEARCH_USER_SUCCESS:
            return {...state,searchUser:action.payload,loading:false,error:null}

        default:
            return state;
    }
}