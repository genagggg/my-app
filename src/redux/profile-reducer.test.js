import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts:[
      {id:1, massage:'Hi how are you'},
      {id:2, massage:'It my first post'},
      {id:3, massage:'yo'},
      {id:4, massage:'yoo'}
    ]
};

it('length of posts should be incremented',()=>
{
    let action = addPostActionCreator("it-kama");

    let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(5);

}
)


it('message newpost of should be itkama ',()=>
{
    let action = addPostActionCreator("it-kama");

 let newState=profileReducer(state,action);

    expect(newState.posts[4].massage).toBe("it-kama");
}
)

it('after deleting length of message should be decrement ',()=>
{
    let action = deletePost(1);

 let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
}
)

it('after deleting length shouldn`t  be decrement if id is incorrect ',()=>
{
    let action = deletePost(1000);

 let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
}
)
