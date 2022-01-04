import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { propTypes } from 'redux-form';
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if(!profile){
    return <Preloader />
  }
 
  const mainPhotoSelected=(e)=>{
if(e.target.files.length){
  savePhoto(e.target.files[0])
}
  }

	return (<div>
            <div className={s.descriptionBlock}>
             <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
             {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
             <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
             </div>
	
	        </div>);
}

export default ProfileInfo;