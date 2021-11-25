import React from 'react';
import { sendMessageCreator, updateNewPostBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import ProfileContainer from '../Profile/ProfileContainer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
return {
dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
return{
        sendMessage:()=>{dispatch(sendMessageCreator());},
 updateNewMessageBody: (body)=>{dispatch(updateNewPostBodyCreator(body));}
}
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
withAuthRedirect
)(Dialogs);