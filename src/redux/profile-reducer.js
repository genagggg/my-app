const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let initialState = {
  posts:[
    {id:1,massage:'Hi how are you',likecount:12},
    {id:2,massage: 'It my first post',likecount:24},
    {id:3,massage:'yo'},
    {id:4,massage:'yoo'},
 
  ],
  newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action)=> {

  switch(action.type){
    case ADD_POST:{
      let newPost = {
        id: 5,
        massage: state.newPostText,
        likeCount: 0
      };
     return {...state,
        posts:[...state.posts, newPost],
        newPostText:''
      };
}
    case UPDATE_NEW_POST_TEXT:{
     return{
        ...state,
        newPostText:action.newText
       }
    }
     default:
       return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT,
  newText: text});

export default profileReducer;