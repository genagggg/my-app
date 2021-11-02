const UPDATE_NEW_POST_BODY ='UPDATE-NEW-POST-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer =(state=initialState, action)=>{


switch(action.type){
     case UPDATE_NEW_POST_BODY:
         return {
               ...state,
               newMessageBody: action.body
               }
     case SEND_MESSAGE:
          let body = state.newMessageBody;
          return {
               ...state,
               newMessageBody:'',
               message: [...state.message, {id:7, message:body}]
               }
        default:
               return state; 
      }

}

export const updateNewPostBodyCreator =(body)=>({type:UPDATE_NEW_POST_BODY, body: body});
export const sendMessageCreator = ()=>({type:SEND_MESSAGE});

export default dialogsReducer;