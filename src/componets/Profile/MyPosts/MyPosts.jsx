import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts=(props)=> {

      let postsElement=props.posts.map(
              p => <Post message={p.massage} score={p.likecount}/>
        );
        let newPostElement = React.createRef();
       
        let onAddPost = () => {
              props.addPost();
        }
let onPostChange =()=> {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
}

	return (<div>
		<div className={s.postBlock}>
                  <h3>My posts</h3></div>
      <div>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
            <div><button onClick={onAddPost}>Add Post</button></div>
      </div>
      <div className={s.posts}>
     {postsElement}
	</div>
      </div>);
}

export default MyPosts;