import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';
import {getPageSize,getFollowingInProgress,getIsFetching, getTotalUsersCount, getCurrentPage, getUsers } from '../../redux/users-selrctors';

class UsersContainer extends React.Component{
  
componentDidMount(){
  let {currentPage, pageSize}=this.props
  this.props.getUsers(currentPage, pageSize);
}
    
    onPageChanged = (pageNamber)=>{
  const {pageSize}=this.props;
  this.props.getUsers(pageNamber, pageSize);
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
 
 
