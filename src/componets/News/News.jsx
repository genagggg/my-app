import React from 'react';
import s from './News.module.css';
const News =(props)=> {
    let newPostElement=React.createRef();
   let addPost = ()=>{
       let postag = newPostElement.current.value;
       alert(postag);
   }

    return(
<div>
    <textarea ref={newPostElement}></textarea>
    <div><button onClick={addPost}>Отправить</button></div>
</div>
    );
}

export default News;