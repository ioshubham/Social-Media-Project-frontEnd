import { api } from "../../Config/api"
import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE } from "./post.actionType"

export const createPostAction=(postData)=>async(dispatch)=>{
    dispatch({type:CREATE_POST_REQUEST})

    try {
        const {data} = await api.post('/api/posts',postData)
        console.log("post data-------",data)
        dispatch({type:CREATE_POST_SUCCESS,payload:data})
        
    } catch (error) {
        console.log("post data error-------",error)
        dispatch({type:GET_ALL_POST_FAILURE,payload:error})
    }

}