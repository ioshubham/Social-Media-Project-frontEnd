import { api } from "../../Config/api"
import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USER_POST_FAILURE, GET_USER_POST_REQUEST, GET_USER_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"

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

export const getAllPostAction=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_POST_REQUEST});

    try {
        const {data} = await api.get('/api/post')
        
        dispatch({type:GET_ALL_POST_SUCCESS,payload:data})
        console.log("get all post-------",data)
    } catch (error) {
        console.log("post data error-------",error)
        dispatch({type:GET_ALL_POST_FAILURE,payload:error})
    }

}

export const findUsersPostAction=(userId)=>async(dispatch)=>{
    dispatch({type:GET_USER_POST_REQUEST})

    try {
        const {data} = await api.get(`/api/post/user/${userId}`)
        console.log("get user post-------",data)
        dispatch({type:GET_USER_POST_SUCCESS,payload:data})
        
    } catch (error) {
        console.log("post user error-------",error)
        dispatch({type:GET_USER_POST_FAILURE,payload:error})
    }

}

export const likePostAction=(postId)=>async(dispatch)=>{
    dispatch({type:LIKE_POST_REQUEST})

    try {
        const {data} = await api.get(`/api/post/like/${postId}`)
        console.log("like post-------",data)
        dispatch({type:LIKE_POST_SUCCESS,payload:data})
        
    } catch (error) {
        console.log("like post error-------",error)
        dispatch({type:LIKE_POST_FAILURE,payload:error})
    }

}