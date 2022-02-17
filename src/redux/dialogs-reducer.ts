
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
     id: number
     name: string
}

type MessageType = {
     id: number
     message: string
}

let initialState = {
     dialog: [
          { id: 1, name: 'Dimych' },
          { id: 2, name: 'Andrew' },
          { id: 3, name: 'Sveta' },
          { id: 4, name: 'Sasha' },
          { id: 5, name: 'Viktor' },
          { id: 6, name: 'Valera' }
     ] as Array<DialogType>,

     message: [
          { id: 1, message: 'Hi' },
          { id: 2, message: 'How are you It' },
          { id: 3, message: 'yo' },
          { id: 4, message: 'yoo' },
          { id: 5, message: 'yuo' },
          { id: 6, message: 'yoda' }
     ] as Array<MessageType>

};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {


     switch (action.type) {

          case SEND_MESSAGE:
               let body = action.newMessageBody;
               return {
                    ...state,
                    message: [...state.message, { id: 7, message: body }]
               }
          default:
               return state;
     }

}

type SendMessageCreatorActionType = {
     type: typeof SEND_MESSAGE
     newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;