import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
 
	return (<div>
            {/*<div>
              <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt=""/>
            </div>*/}

	         <div className={s.descriptionBlock}>
             <img src={props.profile.photos.large}/>
             <ProfileStatus status={"hello world"} />
             </div>
	
	        </div>);
}

export default ProfileInfo;