import React from 'react';
import s from './Post.module.css';

const Post=(props)=> {

   

	return (<div>
	
	<div className={s.posts}>

 <div className={s.item}>
     <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt=""/>
      
      {props.message}<div><span>Like{props.score}</span>
      </div>
 </div>
</div>

	</div>);
}

export default Post;