import React from 'react';
import logo from './logo.svg';
import Header from './componets/Header/Header.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';
import Profile from './componets/Profile/Profile.jsx';
import './App.css';
import News from './componets/News/News.jsx';
import Music from './componets/Music/Music.jsx';
import Setting from './componets/Setting/Setting.jsx';
import UsersContainer from './componets/Users/UsersContainer';
import {  Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';


const App = (props) => {

  return (
  <div className="app-wrapper"> 
<Header />
<Navbar />
<div className="app-wrapper-content">
<Route path='/dialogs' render={()=><DialogsContainer />}/>
<Route path='/profile' render={()=><Profile />}/>
<Route path='/news' render={()=><News />} />
<Route path='/music' render={()=><Music />} />
<Route path='/setting' render={()=><Setting />} />
<Route path='/users' render={()=><UsersContainer />} />
</div>

  </div>
  
  );
}
export default App;

