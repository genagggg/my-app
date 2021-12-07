import React from 'react';
import Navbar from './componets/Navbar/Navbar.jsx';
import './App.css';
import News from './componets/News/News.jsx';
import Music from './componets/Music/Music.jsx';
import Setting from './componets/Setting/Setting.jsx';
import UsersContainer from './componets/Users/UsersContainer';
import {  Route, withRouter } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer.jsx';
import Login from './componets/Login/Login.jsx';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './componets/common/Preloader/Preloader.js';


class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp()
  }



render(){
if(!this.props.initialized){
  return <Preloader />
}
  return (
  <div className="app-wrapper"> 
<HeaderContainer />
<Navbar />
<div className="app-wrapper-content">
<Route path='/dialogs' render={()=><DialogsContainer />}/>
<Route path='/profile/:userId?' render={()=><ProfileContainer />}/>
<Route path='/news' render={()=><News />} />
<Route path='/music' render={()=><Music />} />
<Route path='/setting' render={()=><Setting />} />
<Route path='/users' render={()=><UsersContainer />} />
<Route path='/login' render={()=><Login />} />
</div>

  </div>
  
  );
}
}

const mapStateToProps=(state)=>({
  initialized: state.app.initialized
})

export default compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp} ))(App);

