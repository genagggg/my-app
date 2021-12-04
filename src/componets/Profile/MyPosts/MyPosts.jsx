import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10=maxLengthCreator(10);

const MyPosts=(props)=> {

      let postsElement=props.posts.map(
              p => <Post message={p.massage} score={p.likecount}/>
        );
       
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
            <div><Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10 ]} /></div>
            <div><button>Add Post</button></div>
</form>
      )
}

const AddNewPostFormRedux=reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;