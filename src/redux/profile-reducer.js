import { profileApi, usersAPI } from "../api/api";
const ADD_POST='ADD-POST';
const SET_USER_PROFILE  ='SET_USER_PROFILE';
const SET_STATUS="SET_STATUS";
const DELETE_POST = "DELETE_POST";

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

     default:
       return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile =(profile)=>({type:SET_USER_PROFILE, profile});
export const deletePost =(postId)=>({type:DELETE_POST, postId})
export const setStatus=(status)=>({type:SET_STATUS,status})
export const getUserProfile=(userId)=>(dispatch)=>{
  usersAPI.getProfile(userId).then(response=>{
		dispatch(setUserProfile(response.data));
	});
}
export const getStatus=(userId)=>(dispatch)=>{
  profileApi.getStatus(userId).
  then(response=>{
    dispatch(setStatus(response.data));
  })
}
export const updateStatus=(status)=>(dispatch)=>{
  profileApi.updateStatus(status).
  then(response=>{
    if(response.data.resultCode===0){
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer;