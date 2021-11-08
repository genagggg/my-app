import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/users-reducer';
import UsersApiComponent from './UsersApiComponent';

let mapStateToProps = (state) => {
    
    return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage
    }
    
}

let mapDispatchToProps = (dispatch) => {
return {
    follow: (userId) =>{
        dispatch(followAC(userId));
    }
,
unfollow: (userId) =>{
    dispatch(unfollowAC(userId));
},
setUsers: (users) =>{
    dispatch(setUsersAC(users));
},
setCurrentPage: (pageNamber) =>{
    dispatch(setCurrentPageAC(pageNamber))
},
setTotalUsersCount: (totalCount)=>{
dispatch(setUsersTotalCountAC(totalCount))
}


}
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)
 
 
