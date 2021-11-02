import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
	return (<div>
            <div>
              <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt=""/>
            </div>

	         <div className={s.descriptionBlock}>ava+description</div>
	
	        </div>);
}

export default ProfileInfo;