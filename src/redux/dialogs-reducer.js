
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
        ]
        
};

const dialogsReducer =(state=initialState, action)=>{


switch(action.type){
     
     case SEND_MESSAGE:
          let body = action.newMessageBody;
          return {
               ...state,
               message: [...state.message, {id:7, message:body}]
               }
        default:
               return state; 
      }

}


export const sendMessageCreator = (newMessageBody)=>({type:SEND_MESSAGE,newMessageBody});

export default dialogsReducer;