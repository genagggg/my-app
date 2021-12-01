import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts=(props)=> {

      let postsElement=props.posts.map(
              p => <Post message={p.massage} score={p.likecount}/>
        );
        let newPostElement = React.createRef();
       
        let onAddPost = (values) => {
              props.addPost(values.newPostText);
        }

	return (<div>
		<div className={s.postBlock}>
                  <h3>My posts</h3></div>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
     {postsElement}
	</div>
      </div>);
}

const AddNewPostForm = (props)=>{
      return (
<form onSubmit={props.handleSubmit}>
            <div><Field name="newPostText" component="textarea" /></div>
            <div><button>Add Post</button></div>
</form>
      )
}

const AddNewPostFormRedux=reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;