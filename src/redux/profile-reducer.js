import { getFormInitialValues, stopSubmit } from "redux-form";
import { profileApi, usersAPI } from "../api/api";
const ADD_POST='ADD-POST';
const SET_USER_PROFILE  ='SET_USER_PROFILE';
const SET_STATUS="SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts:[
    {id:1,massage:'Hi how are you',likecount:12},
    {id:2,massage: 'It my first post',likecount:24},
    {id:3,massage:'yo'},
    {id:4,massage:'yoo'},
 
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action)=> {

  switch(action.type){
    case ADD_POST:{
      let newPost = {
        id: 5,
        massage: action.newPostText,
        likeCount: 0
      };
     return {...state,
        posts:[...state.posts, newPost],
        newPostText:''
      };
}
    
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile};
    }
case SET_STATUS:{
  return{
    ...state,
    status: action.status
  }
}

case DELETE_POST: {
  return {
    ...state,
    posts: state.posts.filter(p=>p.id!=action.postId)
  }
}

case SAVE_PHOTO_SUCCESS:{
return {
  ...state,
  profile: {...state.profile, photos: action.photos}
}
}

     default:
       return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile =(profile)=>({type:SET_USER_PROFILE, profile});
export const deletePost =(postId)=>({type:DELETE_POST, postId})
export const setStatus=(status)=>({type:SET_STATUS,status})
export const savePhotoSuccess=(photos)=>({type:SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile=(userId)=>async(dispatch)=>{
  let response = await usersAPI.getProfile(userId);
		dispatch(setUserProfile(response.data));
	}
export const getStatus=(userId)=>async(dispatch)=>{
 let response=await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus=(status)=>async(dispatch)=>{
 let response=await profileApi.updateStatus(status)
    if(response.data.resultCode===0){
      dispatch(setStatus(status))
    }
}

export const savePhoto=(file)=>async(dispatch)=>{
  let response= await profileApi.savePhoto(file);

  if(response.data.resultCode===0){
    dispatch(response.data.data.photos);
  }
}

export const saveProfile=(profile)=>async(dispatch, getState)=>{
 
const userId = getState().auth.userId;

  const response= await profileApi.saveProfile(profile);

  if(response.data.resultCode===0){
   dispatch(getUserProfile(userId));
  }
  else{
    dispatch(stopSubmit("edit-profile",{_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;