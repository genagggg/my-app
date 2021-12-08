import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';
import {getUsers ,getPageSize,getFollowingInProgress,getIsFetching, getTotalUsersCount, getCurrentPage } from '../../redux/users-selrctors';

class UsersContainer extends React.Component{
  
componentDidMount(){
  this.props.getUsers(this.props.currentPage, this.props.pageSize);
}
    
    onPageChanged = (pageNamber)=>{
  this.props.setCurrentPage(pageNamber);
  this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.pageNamber, this.props.pageSize).then(data =>{
  this.props.toggleIsFetching(false);  
  this.props.setUsers(data.items);
  });
    }
      render(){
       
          return <> 
          {this.props.isFetching ? 
         <Preloader />: null}
          <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
         followingInProgress={this.props.followingInProgress}
          /> 
          </>
  }
  }

/*let mapStateToProps = (state) => {
    return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage,
     isFetching: state.usersPage.isFetching,
     followingInProgress: state.usersPage.followingInProgress
    }
    
}*/

let mapStateToProps = (state) => {
  return {
   users: getUsers(state),
   pageSize: getPageSize(state),
   totalUsersCount:getTotalUsersCount(state),
   currentPage: getCurrentPage(state),
   isFetching: getIsFetching(state),
   followingInProgress: getFollowingInProgress(state)
  }
  
}


export default compose(connect(mapStateToProps, {
  follow,
  
  unfollow,
  
  setUsers,
  
  setCurrentPage,
  
   setTotalUsersCount,
  
  toggleIsFetching,
  
  toggleFollowingProgress,
  
  getUsers: requestUsers
  })
) (UsersContainer);
 
 
