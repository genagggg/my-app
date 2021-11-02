import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state:{ 
    profilePage:{
    posts:[
      {id:1,massage:'Hi how are you',likecount:12},
      {id:2,massage: 'It my first post',likecount:24},
      {id:3,massage:'yo'},
      {id:4,massage:'yoo'},
   
    ],
    newPostText: 'it-kamasutra.com'
  },
  dialogsPage:{
    dialog:[
      {id:1,name:'Dimych'},
      {id:2,name:'Andrew'},
      {id:3,name:'Sveta'},
      {id:4,name:'Sasha'},
      {id:5,name:'Viktor'},
      {id:6,name:'Valera'}
    ],
  
    message:[
      {id:1,message:'Hi'},
      {id:2,message: 'How are you It'},
      {id:3,message:'yo'},
      {id:4,message:'yoo'},
      {id:5,message:'yuo'},
      {id:6,message: 'yoda'}
    ],
    newMessageBody:''
  }},

  getState(){
    return this._state;
  },

_callSubscriber(){},

subscribe(observer){
  this._callSubscriber=observer;
  },

 dispatch(action){
  this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
   this._callSubscriber(this._state);
  }
}

export default store;
